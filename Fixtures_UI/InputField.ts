import { test as base } from '@playwright/test'
import { inputField } from '../PageObjects/InputField'

export type testFixture = {
    InputField: inputField
    InputFieldFixture: string
    InputFieldurl: string
}

export const test = base.extend<testFixture>({
    InputFieldurl: async ({ page }, use) => {
        await page.goto('https://www.qa-practice.com/')
        use('')

    },
    InputField: async ({ page,InputFieldurl }, use) => {
        const InputField = new inputField(page)
        use(InputField)
    }

})