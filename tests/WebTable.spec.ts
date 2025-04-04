import { test } from '../Fixtures_UI/WebTableFixture'

test.describe("Dynamic WebTable", async () => {

  test('Check the Avengers and Non-Avengers', async ({ dynamicWebTable }) => {
   await dynamicWebTable.AvengersValidation()
  })


  test("Status of the Superhero's", async ({ dynamicWebTable }) => {
    await dynamicWebTable.SuperHeroStatus()

  })
  test("Mail id validation", async ({ dynamicWebTable }) => {
   await dynamicWebTable.MailIdValidation()
  })

})