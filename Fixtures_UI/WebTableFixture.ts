import { test as base } from '@playwright/test'
import { DynamicWebTable } from '../PageObjects/DynamicWebTable'

export const test = base.extend<{ dynamicWebTable: DynamicWebTable, webtablePreFunctionality: String }>({

  webtablePreFunctionality: async ({ page }, use) => {
    await page.goto('https://qaplayground.dev/')
    await page.getByText('Dynamic Table').click()
    await use('')
  },

  dynamicWebTable: async ({ page,webtablePreFunctionality }, use) => {
    const webTable = new DynamicWebTable(page)
    await use(webTable)
  },
}) 