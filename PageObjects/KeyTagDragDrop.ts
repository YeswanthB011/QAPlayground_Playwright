import { Page, Locator, expect } from '@playwright/test'
import { urlToHttpOptions } from 'url'

export class KeyTagDragandDrop {

    readonly page: Page
    readonly elementPath: Locator
    readonly message: Locator
    readonly InputBox: Locator
    readonly Remaining: Locator
    readonly remove: Locator

    constructor(page: Page) {
        this.page = page
        this.elementPath = page.locator('.code')
        this.message = page.locator('.info success')
        this.InputBox = page.locator('[type="text"]')
        this.Remaining = page.locator("//div[@class='details']/p/span")
        this.remove = page.locator("//button[contains(text(),'Remove All')]")
    }

    async keyTag() {

        const ElementPath = await this.elementPath.elementHandles()
        for (const path of ElementPath) {
            await path.click()
            for (let i = 0; 9 > i; i++) {
                await path.press('ArrowUp', {
                    delay: 400,
                })
            }
        }
        expect(this.message).toHaveText('Success')
    }

    async tagbox() {
        const tags = ['one', 'two', 'three', 'four', 'five']
        const inputBox = await this.InputBox
        for (const data of tags) {

            await inputBox.fill(data)
            await inputBox.press('Enter', {
                delay: 1000
            })

        }

        const remaining = this.Remaining
        await this.page.waitForTimeout(2000)
        console.log(`${await remaining.textContent()}  tags are remaining`)

        await this.page.waitForTimeout(2000)
        await this.remove.click()

        expect(await remaining.textContent()).toContain('10')
        console.log(`${await remaining.textContent()}  tags are remaining`)

    }

    async dragandDrop() {
        const topList = [
            { position: 1, name: "Jeff Bezos" },
            { position: 2, name: "Bill Gates" },
            { position: 3, name: "Warren Buffett" },
            { position: 4, name: "Bernard Arnault" },
            { position: 5, name: "Carlos Slim Helu" },
            { position: 6, name: "Amancio Ortega" },
            { position: 7, name: "Larry Ellison" },
            { position: 8, name: "Mark Zuckerberg" },
            { position: 9, name: "Michael Bloomberg" },
            { position: 10, name: "Larry Page" },
        ]

        const draggables = await this.page.locator('.draggable').elementHandles()
        for (const namelist of draggables) {
            const name=await namelist.textContent()
           
            await this.page.dragAndDrop('', '')
        }
    }

}