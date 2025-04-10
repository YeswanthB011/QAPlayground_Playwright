import { Page, expect } from '@playwright/test'
import path from 'path'


export class Interactions {
    readonly page: Page


    constructor(page: Page) {
        this.page = page

    }

    async uploadFile() {
        await this.page.getByText('Upload File').click()
        try {
            this.page.locator('#file-input').setInputFiles('../Resources/image.png')
        } catch {
            console.log("coding issue")
        }
    }

    async chainRedirection() {
        this.page.getByText("Redirect Chain").click()
        const secondpage = this.page.waitForResponse((response) =>
            response.url().includes('second'))
        const thirdpage = this.page.waitForResponse((response) =>
            response.url().includes('third'))
        const fourthpage = this.page.waitForResponse((response) =>
            response.url().includes('fourth'))
        const fifthpage = this.page.waitForResponse((response) =>
            response.url().includes('fifth'))
        const sixthpage = this.page.waitForResponse((response) =>
            response.url().includes('sixth'))
        const lastpage = this.page.waitForResponse((response) =>
            response.url().includes('last'))


        await this.page.locator('#redirect').click()

        await secondpage
        await thirdpage
        await fourthpage
        await fifthpage
        await sixthpage
        await lastpage
        await this.page.waitForSelector('#info')
        expect(this.page.locator('#info')).toBeVisible()


    }
}
