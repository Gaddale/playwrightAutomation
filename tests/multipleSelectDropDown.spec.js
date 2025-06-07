const { test, expect } = require('@playwright/test')

test('Handle multiselect dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //mutiple ways

    // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    const content = await page.locator('#colors').textContent();

    await expect(content.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);
})