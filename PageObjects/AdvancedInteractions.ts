import { Locator, Page, expect } from '@playwright/test'

export class advancedInteractions {
    readonly page: Page
    readonly newTab: Locator
    readonly newTabButton: Locator
    readonly popupPage: Locator
    readonly popupLogin: Locator
    readonly nestedFramePage: Locator
    readonly shadowDOMPage: Locator
    readonly dragger: Locator
    readonly percent: Locator

    constructor(page: Page) {
        this.page = page
        this.newTab = page.getByText('New Tab')
        this.newTabButton = page.locator('.btn-green-outline')
        this.popupPage = page.getByText('Pop-Up Window')
        this.popupLogin = page.locator('#login')
        this.nestedFramePage = page.getByText('Nested Iframe')
        this.shadowDOMPage = page.getByText('Shadow DOM')
        this.dragger = page.locator('.btn-green-outline')
        this.percent = page.locator('progress-bar')
    }
    async newtab() {
        await this.newTab.first().click()

        const [newpage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newTabButton.click()
        ])

        expect(await newpage.title()).toContain('New Page')

    }

    async popup() {
        await this.popupPage.click()
        await this.popupLogin.click()
        const popuppromise = this.page.waitForEvent('popup')
        const popup = await popuppromise
        await popup.locator('[type="button"]').click()
        console.log(await this.page.title())

    }

    async nestedFrame() {
        await this.nestedFramePage.click()
        const frame = this.page.frameLocator('#frame1').frameLocator('#frame2')
        await frame.locator('.btn-green-outline').click()
        const inframe = frame.locator('#msg')
        await expect(inframe).toHaveText('Button Clicked')


    }
    async ShadowDOM() {
        await this.shadowDOMPage.click()
        await this.dragger.click()
        await this.page.waitForTimeout(7000)
        const percent = this.percent
        await expect(percent).toHaveAttribute('percent', '95')
    }



}