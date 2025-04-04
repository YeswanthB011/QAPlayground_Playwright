import { test } from '../Fixtures_UI/KeyDragDropFixture'


test.describe('keyTagDragDrop', async () => {
    test('KeyTag - Action', async ({ keyTagDragDrop }) => {
        await keyTagDragDrop.keyTag()
    })
    test("Tag Box", async ({ tagbox }) => {
        await tagbox.tagbox()
    })

    test.afterEach('Test Closure', async ({ keyTagDragDrop }) => {
        await keyTagDragDrop.page.close()
    })
})

