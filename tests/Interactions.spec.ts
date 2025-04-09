import { test } from "../Fixtures_UI/Interactions"

test.describe('Advanced Interactions_2',async () => {
    test('upload file', async ({ interactions }) => {
        await interactions.uploadFile()
    })
})