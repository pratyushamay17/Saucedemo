import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class CheckoutOverviewPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async verifyOverviewPage() {
        await expect(this.page.locator('.title')).toHaveText('Checkout: Overview');
        const cartItems = await this.page.locator('.inventory_item_name').count();
        await expect(cartItems).toBeGreaterThan(0);
        await expect(this.page.locator('//div[@data-test="payment-info-label"]')).toHaveText('Payment Information:');
        await expect(this.page.locator('//div[@data-test="payment-info-value"]')).toBeVisible();
        await expect(this.page.locator('//div[@data-test="shipping-info-label"]')).toHaveText('Shipping Information:');
        await expect(this.page.locator('//div[@data-test="shipping-info-value"]')).toBeVisible();
        await expect(this.page.locator('//div[@data-test="total-info-label"]')).toHaveText('Price Total');
        await expect(this.page.locator('//div[@data-test="subtotal-label"]')).toBeVisible();
        await expect(this.page.locator('//div[@data-test="tax-label"]')).toBeVisible();
        await expect(this.page.locator('//div[@data-test="total-label"]')).toBeVisible();
    }

    async finishCheckout() {
        await this.page.click('#finish');
    }
}

