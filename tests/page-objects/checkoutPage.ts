import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }   

    async verifyCheckoutPage() {
        await expect(this.page.locator('.title')).toHaveText('Checkout: Your Information');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);
        await this.page.click('#continue');
    }
}
