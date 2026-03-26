import { test, expect } from '@playwright/test';
import faker from '@faker-js/faker';
import { DynamicWebTable } from '../../PageObjects/DynamicWebTable';

test.describe('Web Table UI Step Tests', () => {
  test('Spider-Man Real Name Verification', async ({ page }) => {
    const table = new DynamicWebTable(page);
    await table.TablePage();
    await table.AvengersValidation();
  });
});