import { test as base } from '@playwright/test'
import { KeyTagDragandDrop } from '../PageObjects/KeyTagDragDrop'

export type TestFixture={
    keyTagDragDrop: KeyTagDragandDrop
    tagbox:KeyTagDragandDrop
    keyTagDragDropURL: string
    tagboxURL:string

}
export const test = base.extend<TestFixture>({

    keyTagDragDropURL: async ({ page }, use) => {
        await page.goto('https://qaplayground.dev/')
        await page.getByText('Verify Your Account').click()
        await use('')

    },

    tagboxURL:async({page},use)=>{
        await page.goto('https://qaplayground.dev/')
        await page.getByText('Tags Input Box').click()
        await use('')

    },
    keyTagDragDrop: async ({ page, keyTagDragDropURL }, use) => {
        
        const keyTagDragDrop = new KeyTagDragandDrop(page)
        await use(keyTagDragDrop)

    },
    tagbox: async ({ page, tagboxURL }, use) => {
        
        const keyTagDragDrop = new KeyTagDragandDrop(page)
        await use(keyTagDragDrop)

    }
  
  

})