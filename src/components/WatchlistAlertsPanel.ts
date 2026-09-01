/**
 * WatchlistAlertsPanel
 * ---------------------------------------------------------------------------
 * Personal, local-only feature (not part of upstream Meridian):
 *  - Lets you star/bookmark countries into a persistent watchlist.
 *  - Polls the app's existing cached CII risk scores and raises an alert
 *    (in-panel + optional browser notification) when a watched country's
 *    instability level escalates or its score jumps sharply.
 *
 * Self-contained by design: own DOM, own storage keys, own polling loop.
 * Mounted with a single call from src/main.ts so it never has to reach into
 * the rest of the (large, fast-moving) app internals.
 */

import { getCachedCountryScores } from '@/services/cached-risk-scores';
import { CURATED_COUNTRIES } from '@/config/countries';
import type { CountryScore } from '@/services/country-instability';

const STORAGE_KEY_WATCHLIST = 'wm_personal_watchlist_v1';
const STORAGE_KEY_LASTSEEN = 'wm_personal_watchlist_lastseen_v1';
const STORAGE_KEY_THRESHOLD = 'wm_personal_watchlist_threshold_v1';
const STORAGE_KEY_COLLAPSED = 'wm_personal_watchlist_collapsed_v1';
const POLL_INTERVAL_MS = 60_000;
const DEFAULT_SCORE_JUMP_THRESHOLD = 8;

const LEVEL_RANK: Record<CountryScore['level'], number> = {
  low: 0,
  normal: 1,
  elevated: 2,
  high: 3,
  critical: 4,
};

interface LastSeenEntry {
  score: number;
  level: CountryScore['level'];
}

interface AlertLogEntry {
  id: string;
  code: string;
  name: string;
  message: string;
  time: number;
}

function loadWatchlist(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WATCHLIST);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((c) => typeof c === 'string') : [];
  } catch {
    return [];
  }
}

function saveWatchlist(codes: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_WATCHLIST, JSON.stringify(codes));
  } catch {
    /* storage unavailable — feature degrades to in-memory only */
  }
}

function loadLastSeen(): Record<string, LastSeenEntry> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LASTSEEN);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLastSeen(map: Record<string, LastSeenEntry>): void {
  try {
    localStorage.setItem(STORAGE_KEY_LASTSEEN, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

function loadThreshold(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_THRESHOLD);
    const n = raw ? Number(raw) : NaN;
    return Number.isFinite(n) && n > 0 ? n : DEFAULT_SCORE_JUMP_THRESHOLD;
  } catch {
    return DEFAULT_SCORE_JUMP_THRESHOLD;
  }
}

function saveThreshold(n: number): void {
  try {
    localStorage.setItem(STORAGE_KEY_THRESHOLD, String(n));
  } catch {
    /* ignore */
  }
}

function escapeHtml(s: string): string {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

export class WatchlistAlertsPanel {
  private root: HTMLElement | null = null;
  private watchlist: string[] = [];
  private lastSeen: Record<string, LastSeenEntry> = {};
  private threshold = DEFAULT_SCORE_JUMP_THRESHOLD;
  private alertLog: AlertLogEntry[] = [];
  private pollHandle: ReturnType<typeof setInterval> | null = null;
  private notifyPermission: NotificationPermission | 'unsupported' =
    typeof Notification === 'undefined' ? 'unsupported' : Notification.permission;

  mount(): void {
    if (this.root) return;
    this.watchlist = loadWatchlist();
    this.lastSeen = loadLastSeen();
    this.threshold = loadThreshold();

    const el = document.createElement('div');
    el.id = 'wm-watchlist-panel';
    el.className = 'wm-watchlist-panel';
    document.body.appendChild(el);
    this.root = el;

    const collapsed = localStorage.getItem(STORAGE_KEY_COLLAPSED) === '1';
    if (collapsed) el.classList.add('wm-watchlist-collapsed');

    this.render();
    this.tick();
    this.pollHandle = setInterval(() => this.tick(), POLL_INTERVAL_MS);
  }

  destroy(): void {
    if (this.pollHandle) clearInterval(this.pollHandle);
    this.root?.remove();
    this.root = null;
  }

  private tick(): void {
    const scores = getCachedCountryScores();
    if (scores.length) this.checkAlerts(scores);
    this.render(scores);
  }

  private checkAlerts(scores: CountryScore[]): void {
    let changed = false;
    for (const code of this.watchlist) {
      const current = scores.find((s) => s.code === code);
      if (!current) continue;

      const prev = this.lastSeen[code];
      if (prev) {
        const levelEscalated = LEVEL_RANK[current.level] > LEVEL_RANK[prev.level];
        const jumped = current.score - prev.score >= this.threshold;

        if (levelEscalated) {
          this.raiseAlert(
            current,
            `${current.name} escalated from ${prev.level.toUpperCase()} to ${current.level.toUpperCase()} (score ${current.score.toFixed(0)})`,
          );
        } else if (jumped) {
          this.raiseAlert(
            current,
            `${current.name} instability score jumped +${(current.score - prev.score).toFixed(0)} to ${current.score.toFixed(0)}`,
          );
        }
      }

      this.lastSeen[code] = { score: current.score, level: current.level };
      changed = true;
    }
    if (changed) saveLastSeen(this.lastSeen);
  }

  private raiseAlert(country: CountryScore, message: string): void {
    this.alertLog.unshift({
      id: `${country.code}-${Date.now()}`,
      code: country.code,
      name: country.name,
      message,
      time: Date.now(),
    });
    this.alertLog = this.alertLog.slice(0, 25);

    if (this.notifyPermission === 'granted') {
      try {
        new Notification('Meridian — Watchlist Alert', { body: message, tag: country.code });
      } catch {
        /* ignore notification failures */
      }
    }
  }

  private requestNotifyPermission(): void {
    if (typeof Notification === 'undefined') return;
    Notification.requestPermission().then((perm) => {
      this.notifyPermission = perm;
      this.render();
    });
  }

  private addCountry(code: string): void {
    const normalized = code.toUpperCase().trim();
    if (!normalized || this.watchlist.includes(normalized)) return;
    this.watchlist.push(normalized);
    saveWatchlist(this.watchlist);
    this.render();
    this.tick();
  }

  private removeCountry(code: string): void {
    this.watchlist = this.watchlist.filter((c) => c !== code);
    saveWatchlist(this.watchlist);
    this.render();
  }

  private render(scoresInput?: CountryScore[]): void {
    if (!this.root) return;
    const scores = scoresInput ?? getCachedCountryScores();
    const scoreMap = new Map(scores.map((s) => [s.code, s]));
    const collapsed = this.root.classList.contains('wm-watchlist-collapsed');

    const rows = this.watchlist
      .map((code) => {
        const s = scoreMap.get(code);
        const name = s?.name ?? CURATED_COUNTRIES[code]?.name ?? code;
        const level = s?.level ?? 'unknown';
        const score = s ? s.score.toFixed(0) : '—';
        const trendGlyph = s?.trend === 'rising' ? '▲' : s?.trend === 'falling' ? '▼' : '▬';
        return `
          <div class="wm-wl-row" data-code="${escapeHtml(code)}">
            <span class="wm-wl-level wm-wl-level-${escapeHtml(level)}"></span>
            <span class="wm-wl-name">${escapeHtml(name)}</span>
            <span class="wm-wl-score">${escapeHtml(score)} ${trendGlyph}</span>
            <button class="wm-wl-remove" data-action="remove" data-code="${escapeHtml(code)}" title="Remove from watchlist">×</button>
          </div>`;
      })
      .join('');

    const alertRows = this.alertLog
      .slice(0, 6)
      .map(
        (a) => `<div class="wm-wl-alert-row"><span class="wm-wl-alert-time">${new Date(a.time).toLocaleTimeString()}</span> ${escapeHtml(a.message)}</div>`,
      )
      .join('');

    const notifyLabel =
      this.notifyPermission === 'granted'
        ? 'Notifications: ON'
        : this.notifyPermission === 'unsupported'
          ? 'Notifications unsupported'
          : 'Enable notifications';

    this.root.innerHTML = `
      <div class="wm-wl-header" data-action="toggle-collapse">
        <span class="wm-wl-title">★ WATCHLIST</span>
        <span class="wm-wl-collapse-icon">${collapsed ? '▸' : '▾'}</span>
      </div>
      <div class="wm-wl-body">
        <div class="wm-wl-add-row">
          <input type="text" class="wm-wl-input" placeholder="Country code or name (e.g. UA, Israel)" list="wm-wl-country-list" />
          <button class="wm-wl-add-btn" data-action="add">+ Add</button>
        </div>
        <datalist id="wm-wl-country-list">
          ${Object.entries(CURATED_COUNTRIES)
            .map(([code, cfg]) => `<option value="${escapeHtml(code)}">${escapeHtml(cfg.name)}</option>`)
            .join('')}
        </datalist>
        <div class="wm-wl-list">
          ${rows || '<div class="wm-wl-empty">No countries watched yet. Add one above.</div>'}
        </div>
        <div class="wm-wl-settings-row">
          <label class="wm-wl-threshold-label">
            Alert on score jump ≥
            <input type="number" min="1" max="50" class="wm-wl-threshold-input" value="${this.threshold}" />
          </label>
          <button class="wm-wl-notify-btn" data-action="notify" ${this.notifyPermission === 'unsupported' ? 'disabled' : ''}>${notifyLabel}</button>
        </div>
        <div class="wm-wl-alert-log">
          <div class="wm-wl-alert-log-title">Recent alerts</div>
          ${alertRows || '<div class="wm-wl-empty">No alerts yet.</div>'}
        </div>
      </div>
    `;

    this.attachHandlers();
  }

  private attachHandlers(): void {
    if (!this.root) return;
    const root = this.root;

    root.querySelector('[data-action="toggle-collapse"]')?.addEventListener('click', () => {
      const nowCollapsed = root.classList.toggle('wm-watchlist-collapsed');
      try {
        localStorage.setItem(STORAGE_KEY_COLLAPSED, nowCollapsed ? '1' : '0');
      } catch {
        /* ignore */
      }
      this.render();
    });

    root.querySelectorAll('[data-action="remove"]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = (btn as HTMLElement).dataset.code;
        if (code) this.removeCountry(code);
      });
    });

    const input = root.querySelector<HTMLInputElement>('.wm-wl-input');
    const addBtn = root.querySelector('[data-action="add"]');
    const doAdd = () => {
      if (!input) return;
      const val = input.value.trim();
      if (!val) return;
      const upper = val.toUpperCase();
      const code = CURATED_COUNTRIES[upper]
        ? upper
        : Object.entries(CURATED_COUNTRIES).find(([, cfg]) => cfg.name.toLowerCase() === val.toLowerCase())?.[0];
      this.addCountry(code ?? upper);
      input.value = '';
    };
    addBtn?.addEventListener('click', doAdd);
    input?.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') doAdd();
    });

    root.querySelector('.wm-wl-threshold-input')?.addEventListener('change', (e) => {
      const n = Number((e.target as HTMLInputElement).value);
      if (Number.isFinite(n) && n > 0) {
        this.threshold = n;
        saveThreshold(n);
      }
    });

    root.querySelector('[data-action="notify"]')?.addEventListener('click', () => {
      this.requestNotifyPermission();
    });
  }
}

export const watchlistAlertsPanel = new WatchlistAlertsPanel();
