import { test } from "../Fixtures_UI/Interactions"

test.describe('Advanced Interactions_2',async () => {
    test('upload file', async ({ interactions }) => {
        try{
        await interactions.uploadFile()
        }catch{
            console.log('Codding issue')
        }
    })
    test('redirection chain validation',async({interactions})=>{
        await interactions.chainRedirection()
    })
})