const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const allFrames = page.frames();

    console.log('All Frames', allFrames.length);


    //using name of frame

    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })

    await frame1.fill('[name="mytext1"]', "Hello Frames");

    // await page.waitForTimeout(5000)

    // using frame locator

    const inputBox = await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]');

    await inputBox.fill("Hello once again")
    await page.waitForTimeout(5000)


})