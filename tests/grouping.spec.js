const { test, expect } = require('@playwright/test')

test.beforeAll(async () => {
    console.log('This is before all Hook....')
})

test.afterAll(async () => {
    console.log('This is After all Hook....')
})

test.beforeEach(async () => {
    console.log('This is beforeEach Hook....')
})

test.afterEach(async () => {
    console.log('This is After each Hook....')
})

test.describe.only('group1', () => {
    test('Test1', async ({ page }) => {
        console.log('This is test 1.....')
    })

    test('Test2', async ({ page }) => {
        console.log('This is test 2.....')
    })

})

test.describe('group2', () => {

    test('Test3', async ({ page }) => {
        console.log('This is test 3.....')
    })

    test('Test4', async ({ page }) => {
        console.log('This is test 4.....')
    })
})


