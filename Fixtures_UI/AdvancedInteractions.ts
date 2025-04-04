import { test as base } from '@playwright/test'
import { advancedInteractions } from '../PageObjects/AdvancedInteractions'

export type testFixture = {
    AdvancedInteractions: advancedInteractions
    AdvancedURL: string
}

export const test = base.extend<testFixture>({

    AdvancedURL: async ({ page }, use) => {
        await page.goto()

    },

    AdvancedInteractions: async ({ page }, use) => {
        const AdvancedInteractions = new advancedInteractions(page)
        await use(AdvancedInteractions)
    }
})