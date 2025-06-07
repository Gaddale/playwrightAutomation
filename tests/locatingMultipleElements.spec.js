import { test, expect } from '@playwright/test'

test('LocatingMultipleElements', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")

    const products = await page.$$("//div[@id='tbodyid']//div/h4/a");

    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }

    const links = await page.$$('//a');

    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let linkText = await link.textContent();
        console.log(linkText);
    }
})