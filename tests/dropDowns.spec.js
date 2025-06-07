const { test, expect } = require('@playwright/test')

test('Handle dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //mutiple ways

    // await page.locator('#country').selectOption({ label: 'India' });

    // await page.locator('#country').selectOption('India');

    // await page.locator('#country').selectOption({ value: 'uk' });

    // await page.locator('#country').selectOption({ index: 1 });
    await page.selectOption('#country', 'India')
    await page.waitForTimeout(5000);
})