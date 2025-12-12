import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class CartPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductInCart(productName: string) {
        const productLocator = this.page.locator('.cart_item').filter({ hasText: productName });
        await expect(productLocator).toBeVisible();
       
    }

    async navigateToCheckout() {
        await this.page.click('#checkout');
    }
    
}   