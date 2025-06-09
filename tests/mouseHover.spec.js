const { test, expect } = require('@playwright/test')

test('Mouse hover', async ({ page }) => {

    await page.goto('https://dribbble.com/tags/mouse-over');

    const explore = await page.locator("//a[normalize-space()='Explore']");

    await expect(explore).toBeVisible();

    await explore.hover();

    await page.waitForTimeout(5000);
})