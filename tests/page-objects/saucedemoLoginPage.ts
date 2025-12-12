import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class SaucedemoLoginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async loginCredentials(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
    
}