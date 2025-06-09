const { test, expect } = require('@playwright/test')

test('table test', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable');

    const columns = await table.locator('thead tr th');

    console.log('Number of columns', await columns.count());
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr');
    expect(await rows.count()).toBe(5);

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })

    await matchedRow.locator('input').check();

    await page.waitForTimeout(5000)

    //loop through the table

    // for (let i = 0; i < await rows.count(); i++) {

    //     const row = rows.nth(i);
    //     const tds = await row.locator('td');
    //     for (let j = 0; j < await tds.count() - 1; j++) {
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }

    // loop through all the pagination and print the values

    const pages = await page.locator('#pagination li a');
    console.log('Number of paginations', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {

            const row = rows.nth(i);
            const tds = await row.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(3000)
    }


})
