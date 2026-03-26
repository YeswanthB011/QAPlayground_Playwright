import { test, expect } from '@playwright/test';

test('QA Playground - Code Generator App', async ({ page }) => {
  await page.goto('https://qaplayground.dev/apps/code-generator/');
  const title = await page.title();
  expect(title).toBeTruthy();
});

test('QA Playground - Rating App', async ({ page }) => {
  await page.goto('https://qaplayground.dev/apps/rating/');
  const title = await page.title();
  expect(title).toBeTruthy();
});

test('QA Playground - Dynamic iFrame', async ({ page }) => {
  await page.goto('https://qaplayground.dev/apps/dynamic-iframe/');
  const title = await page.title();
  expect(title).toBeTruthy();
});
