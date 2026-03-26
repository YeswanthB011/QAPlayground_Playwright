import { test, expect } from '@playwright/test';
import { KeyTagDragandDrop } from '../PageObjects/KeyTagDragDrop';

test.describe('Key Tag Drag Drop Tests', () => {
  test('Key Navigation', async ({ page }) => {
    await page.goto('/');
    const keyTag = new KeyTagDragandDrop(page);
    await keyTag.keyTag();
  });

  test('Tag Box', async ({ page }) => {
    await page.goto('/');
    const keyTag = new KeyTagDragandDrop(page);
    await keyTag.tagbox();
  });
});
