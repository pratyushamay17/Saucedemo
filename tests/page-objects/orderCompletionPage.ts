import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class OrderCompletionPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }   

    async verifyOrderComplate()
    {
        await expect(this.page.locator('.title')).toHaveText('Checkout: Complete!');
        await expect(this.page.locator('.pony_express')).toBeVisible();
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
        await expect(this.page.locator('.complete-text')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(this.page.locator('#back-to-products')).toBeVisible();
    }
}
