import { Browser, Page, expect } from '@playwright/test'
import { test } from '../Fixtures_UI/KeyDragDropFixture'

export class advancedInteractions {
    readonly page: Page



    constructor(page: Page) {
        this.page = page

    }


    async newtab() {
        await this.page.getByText('New Tab').click()

        const [newpage] = await Promise.all([
            await this.page.context().waitForEvent('page'),
            await this.page.locator('.btn-green-outline').click()
        ])

        expect(newpage.title()).toContain('New Page')

    }



}