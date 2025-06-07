const { test, expect } = require('@playwright/test')


test.skip('Alert window', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box')
        await dialog.accept()
    })

    await page.click('#alertBtn')

    await page.waitForTimeout(5000)

})

test.skip('Alert window confirmation', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
    })

    await page.click('#confirmBtn')
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)

})

test('Alert prompt', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John')
    })

    await page.click('#promptBtn')
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(5000)

})
