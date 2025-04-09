import { Page } from '@playwright/test'
import path from 'path'


export class Interactions {
    readonly page: Page


    constructor(page: Page) {
        this.page = page

    }

    async uploadFile() {
        await this.page.getByText('Upload File').click()
        try{
        this.page.locator('#file-input').setInputFiles('../Resources/image.png')
        }catch{
            console.log("coding issue")
        }
    }

    async chainRedirection(){
        await this.page()
    }
}