import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const panelLayout = readFileSync(new URL('../src/app/panel-layout.ts', import.meta.url), 'utf8');

describe('variant switcher navigation', () => {
  it('keeps every production variant link on the dashboard route', () => {
    const dashboardUrls = {
      full: 'https://meridian.app/dashboard',
      tech: 'https://tech.meridian.app/dashboard',
      finance: 'https://finance.meridian.app/dashboard',
      commodity: 'https://commodity.meridian.app/dashboard',
      energy: 'https://energy.meridian.app/dashboard',
      happy: 'https://happy.meridian.app/dashboard',
    } as const;

    for (const [variant, url] of Object.entries(dashboardUrls)) {
      assert.match(
        panelLayout,
        new RegExp(`vHref\\('${variant}', '${url.replaceAll('.', '\\.')}'\\)`),
        `${variant} switcher link must target ${url}`,
      );
    }
  });
});
