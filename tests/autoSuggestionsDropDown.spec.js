const { test, expect } = require('@playwright/test')

test('AutoSuggestions', async ({ page }) => {

    await page.goto('https://www.redbus.in/')

    // await page.waitForTimeout(5000);

    await page.locator("//div[text()='From']").click();
    // await page.waitForTimeout(5000);
    // fill('Delhi')
    await page.locator("#srcDest").fill("Delhi")

    await page.waitForSelector("//div[contains(@class,'listText')]")

    const fromCities = await page.$$("//div[contains(@class,'listHeader')]")

    for (let city of fromCities) {
        let value = await city.textContent();
        if (value.includes("Majnu Ka Tilla, Delhi")) {
            await city.click();
        }
    }

    await page.waitForTimeout(5000);
})