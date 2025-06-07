const { test, expect } = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    await expect(await page.locator('.header-logo')).toBeVisible();

    await expect(await page.locator('#small-searchterms')).toBeEnabled();

    const maleRadioButton = await page.locator("//*[@id='gender-male']");

    await maleRadioButton.click();

    await expect(maleRadioButton).toBeChecked();

    const regButton = await page.locator('#register-button')

    await expect(regButton).toHaveAttribute('type', 'submit');

    //To have text and to contain text
    const expText = await page.locator('//h1');

    await expect(expText).toHaveText('Register');

    await expect(expText).toContainText('Regi');

    //to haveValue
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //tohaveCount
    const digitalDownloads = await page.locator("//ul[@class='top-menu notmobile']/li/a[contains(text(), 'Digital downloads ')]")
    await digitalDownloads.click();
    const position = await page.locator('#products-orderby option');
    await expect(position).toHaveCount(6);




})