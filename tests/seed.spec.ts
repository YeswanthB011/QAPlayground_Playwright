import { test, expect } from '@playwright/test';

test('Seed Test - Navigation', async ({ page }) => {
  await page.goto('https://qaplayground.dev/');
  const title = await page.title();
  expect(title).toBeTruthy();
});
