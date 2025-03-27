import { test,expect } from '@playwright/test';
import faker from '@faker-js/faker';

test('webtable', async ({ page }) => {
    await page.goto('/');

    await page.getByText('Dynamic Table').click();
    const avengers: string[] = [
        "Iron Man", "Thor", "Hulk", "Ant-Man", "Wasp", "Captain America",
        "Black Widow", "Hawkeye", "Scarlet Witch", "Vision", "Black Panther", "Doctor Strange",
        "Spider-Man", "Falcon", "War Machine", "Captain Marvel", "Winter Soldier"
    ];

    const superheroes = await page.locator('.ml-4 .font-medium').elementHandles();
for (const superhero of superheroes) {
    const superHeroName = await superhero.textContent();
    console.log(superHeroName);
}
})

test.describe("Dynamic Table", () => {
    test("Should verify Spider-Man's real name", async ({ page }) => {
      await page.goto("apps/dynamic-table/");
      await expect(page.locator("text=SUPERHERO")).toBeVisible();
  
      const realName = "Peter Parker";
      const row = page.locator('text="Spider-Man" >> xpath=../../../..');
      const realNameCell = row.locator("td").nth(2);
        console.log(realName,realNameCell)
      await expect(realNameCell).toHaveText(realName);
    });
  });

test.afterEach('terminate', async ({ page }) => {
    await page.close();
});