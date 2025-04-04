import { Locator, Page } from '@playwright/test'

export class DynamicWebTable {


    readonly page: Page
    readonly DynamicTable: Locator
    readonly Name: Locator
    readonly SuperHeroes: Locator
    readonly statusPath: Locator
    readonly mailPath: Locator


    constructor(page: Page) {
        this.page = page
        this.DynamicTable = page.getByText('Dynamic Table')
        this.Name = page.locator('.ml-4 .font-medium').first()
        this.SuperHeroes = page.locator('.ml-4 .font-medium')
        this.statusPath = page.locator('.whitespace-nowrap .inline-flex')
        this.mailPath = page.locator('.ml-4 .text-gray-500')

    }

    async TablePage() {

        await this.page.goto('https://qaplayground.dev/')
        await this.DynamicTable.click()
    }
    async AvengersValidation() {
        const avengers: string[] = [
            "Iron Man", "Thor", "Hulk", "Ant-Man", "Wasp", "Captain America",
            "Black Widow", "Hawkeye", "Scarlet Witch", "Vision", "Black Panther", "Doctor Strange",
            "Spider-Man", "Falcon", "War Machine", "Captain Marvel", "Winter Soldier"
        ]
        const name = await this.Name
        const data = await name.textContent()
        console.log(data)
        const superheroes = await this.SuperHeroes.elementHandles()
        for (const superhero of superheroes) {
            const superHeroName = await superhero.textContent()
            // console.log(superHeroName)
            if (superHeroName && avengers.includes(superHeroName)) {
                console.log(`${superHeroName} is an avenger`)
            } else {
                console.log(`${superHeroName} is not an avenger`)
            }
        }

    }

    async SuperHeroStatus() {
        let counter: number = 0
        const superheroes = await this.SuperHeroes.elementHandles()
        const statusPath = await this.statusPath.elementHandles()
        //debug to check if it taked text
        const statusPat = await this.statusPath.first()
        console.log(await statusPat.textContent())

        for (const path of statusPath) {
            const status = await path.textContent()
            if (status === "Active") {
                counter++
                console.log(superheroes[counter + 1] + "is active")
            } else {
                console.log(superheroes[counter + 1] + "is not active")
            }
        }
    }

    async MailIdValidation() {
        const mailPath = await this.mailPath.elementHandles()
        for (const path of mailPath) {
            const mail = await path.textContent()
            if (mail?.endsWith("@avengers.com")) {
                continue
            } else {
                console.log(`${mail} is External mail`)
            }
        }
    }
}