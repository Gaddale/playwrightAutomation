// const {test, expect} = require('@playwright/test');
import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    await page.locator('id=login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click("//button[text()='Log in']");
    const logoutLink = await page.locator("//a[text()='Log out']");
    await expect(logoutLink).toBeVisible();
    await page.close();
})
