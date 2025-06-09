const { test, expect, chromium } = require('@playwright/test');

test('Handle pages/windows', async () => {
    const browser = await chromium.launch();
    // Await the newContext() call
    const context = await browser.newContext();

    // Call newPage() to create actual page objects
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    // Await the context.pages() method call
    const allPages = await context.pages();
    console.log("No of pages", allPages.length);

    // Don't forget to close the browser when you're done

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto('https://www.orangehrm.com/')
    await page2.waitForTimeout(10000);
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')
});

test.only('Handle New pages/windows', async () => {
    const browser = await chromium.launch();
    // Await the newContext() call
    const context = await browser.newContext();

    // Call newPage() to create actual page objects
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage = await pagePromise;
    await newPage.waitForTimeout(10000);
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')
    await browser.close();

});