import { test, expect } from '@playwright/test';
import { DynamicWebTable } from '../PageObjects/DynamicWebTable';

test.describe('Web Table Tests', () => {
  test('Avengers Validation', async ({ page }) => {
    const table = new DynamicWebTable(page);
    await table.TablePage();
    await table.AvengersValidation();
  });

  test('Super Hero Status', async ({ page }) => {
    const table = new DynamicWebTable(page);
    await table.TablePage();
    await table.SuperHeroStatus();
  });

  test('Mail ID Validation', async ({ page }) => {
    const table = new DynamicWebTable(page);
    await table.TablePage();
    await table.MailIdValidation();
  });
});