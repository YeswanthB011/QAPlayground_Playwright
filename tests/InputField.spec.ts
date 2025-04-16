import { test } from '../Fixtures_UI/InputField';
import { inputField } from '../PageObjects/InputField';
import testdata from '../Test Data/InputFieldData.json';

test.describe("Input Field Validation", () => {

    test("Required Field", async ({ InputField }) => {
        await InputField.RequiredFiled(testdata['Required Field'][0].data)
    })


    testdata['text String'].forEach(dataItem => {
        test(`Test String validation with data: ${dataItem.id}`, async ({ InputField }) => {
            await InputField.RequiredFiled(dataItem.data)
        })
    })

    testdata['Text Length Limits BVA'].forEach(dataItem => {
        test(`Border value analysis with Data ID : ${dataItem.id}`, async ({ InputField }) => {
            await InputField.RequiredFiled(dataItem.data)
        })
    })

})


