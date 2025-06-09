const { test, expect } = require('@playwright/test')

test('page screenshot', async ({ page }) => {

    await page.goto('https://www.amazon.de/')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' })

})

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://www.amazon.de/')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true })
})

test('Element screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(10000)
    await page.locator("//*[@id='content']/div[2]/div[1]/div").screenshot({ path: 'tests/screenshots/' + Date.now() + 'Element.png' })
})

test.only('Enabled take default Screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
})