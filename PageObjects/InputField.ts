import { Page, test, expect, Selectors, Locator } from '@playwright/test'

export class inputField {

    readonly page: Page
    readonly inputpage: Locator
    readonly inputField: Locator
    readonly errorMessage: Locator
    readonly result: Locator

    constructor(page: Page) {
        this.page = page
        this.inputpage = page.getByText('Text Input')
        this.inputField = page.getByPlaceholder('Submit me')
        this.errorMessage = page.locator('.invalid-feedback')
        this.result = page.locator('#result-text')
    }

    async RequiredFiled(testdata) {
        await this.inputpage.click()
        const inputFiled = this.inputField
        await inputFiled.fill(testdata)
        await inputFiled.press('Enter')
        const error = this.errorMessage
        if (await error.isVisible()) {
            console.log(`${testdata} is not a valid input`)
        } else if(await this.result.isVisible()){
            const result = await this.result.textContent()
            console.log(result)
            expect(result).toBe(testdata)
        }else{
            console.log("Empty submission not accepted")
        }
    }


}