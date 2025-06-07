const { test, expect } = require('@playwright/test')

test('Verify HomePage', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    let pageTitle = await page.title();

    console.log('Page title is: ', pageTitle);
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/');
    await page.close();

})

