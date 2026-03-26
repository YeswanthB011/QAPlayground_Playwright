import { test, expect } from '@playwright/test';
import { Interactions } from '../PageObjects/Interactions';

test.describe('Interactions Tests', () => {
  test('Upload File', async ({ page }) => {
    await page.goto('/');
    const interactions = new Interactions(page);
    await interactions.uploadFile();
  });

  test('Chain Redirection', async ({ page }) => {
    await page.goto('/');
    const interactions = new Interactions(page);
   await interactions.chainRedirection();
  });
});