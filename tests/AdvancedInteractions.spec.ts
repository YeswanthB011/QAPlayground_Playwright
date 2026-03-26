import { test } from '../Fixtures_UI/AdvancedInteractions'

test('NewTab', async ({ AdvancedInteractions }) => {
        await AdvancedInteractions.newtab()
    })

    test("popup", async ({ AdvancedInteractions }) => {
        await AdvancedInteractions.popup()
    })

    test("Nested Frame", async ({ AdvancedInteractions }) => {
        await AdvancedInteractions.nestedFrame()//interact with frames
    })

    test("ShadowDOM", async ({ AdvancedInteractions }) => {
        await AdvancedInteractions.ShadowDOM()
    })
