const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.pList = '//div[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartBtn = "//a[normalize-space()='Add to cart']";
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.pList);
        await this.page.waitForTimeout(10000)
        // expect(await this.page.$$(this.pList)).toBeVisible();
        for (const product of productList) {
            console.log(productName);
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                expect(await product.textContent()).toBeEnabled();
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async (dialog) => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCartBtn).click();
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}