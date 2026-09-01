import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { buildDashboardCheckoutReturnUrl } from '../src/services/checkout-return-url.ts';

describe('buildDashboardCheckoutReturnUrl', () => {
  it('routes Dodo full-page returns to the dashboard instead of the root welcome page', () => {
    assert.equal(
      buildDashboardCheckoutReturnUrl('https://meridian.app'),
      'https://meridian.app/dashboard?wm_checkout=return',
    );
  });

  it('preserves the active origin so preview and variant hosts return to their own dashboard', () => {
    assert.equal(
      buildDashboardCheckoutReturnUrl('https://tech.meridian.app'),
      'https://tech.meridian.app/dashboard?wm_checkout=return',
    );
  });
});
