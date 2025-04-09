import { test as base } from '@playwright/test'
import { Interactions } from '../PageObjects/Interactions'

export type testFixture = {
    interactions: Interactions
    interactionsURL: string
}

export const test = base.extend<testFixture>({
    interactionsURL: async ({ page }, use) => {
        await page.goto('https://qaplayground.dev/')
        await use('')
    },
    interactions: async ({ page, interactionsURL }, use) => {
        const interactions = new Interactions(page)
        await use(interactions)
    }
})