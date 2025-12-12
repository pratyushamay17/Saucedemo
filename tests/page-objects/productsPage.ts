import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class ProductsPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductsPage() {
        await expect(this.page.locator('.app_logo')).toHaveText('Swag Labs');
        await expect(this.page.locator('.title')).toHaveText('Products');
    }

    async addProductsToCart(productName: string) {
        const productLocator = this.page.locator('.inventory_item').filter({ hasText: productName });
        await productLocator.locator('button').click(); 
    } 

    async navigateToCart() {
        await this.page.click('.shopping_cart_link');
    }
}
