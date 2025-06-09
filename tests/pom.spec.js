const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('POM', async ({ page }) => {

    //login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol', 'test@123')

    //Home page
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await page.waitForSelector(5000);
    await homePage.gotoCart();


    // await page.goto('https://demoblaze.com/');
    // await page.getByRole('link', { name: 'Log in' }).click();
    // await page.locator('#loginusername').fill('pavanol');
    // await page.locator('#loginpassword').fill('test@123');
    // await page.getByRole('button', { name: 'Log in' }).click();
})