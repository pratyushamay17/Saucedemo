import { Given, When, Then, Before, After } from '@cucumber/cucumber';
//import { SaucedemoLoginPage } from '../page-objects/saucedemoLoginPage';
import { SaucedemoLoginPage } from '../page-objects/saucedemoLoginPage.ts';
import { ProductsPage } from '../page-objects/productsPage.ts';
import { CartPage } from '../page-objects/cartPage.ts';
import { CheckoutPage } from '../page-objects/checkoutPage.ts';
import { CheckoutOverviewPage } from '../page-objects/checkoutOverviewPage.ts';
import { OrderCompletionPage } from '../page-objects/orderCompletionPage.ts';
import { chromium } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';


let browser: Browser;
let page: Page;
let saucedemoLoginPage: SaucedemoLoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let checkoutOverviewPage: CheckoutOverviewPage;
let orderCompletionPage: OrderCompletionPage;

Before(async () => {
    browser = await chromium.launch({ headless: false});
    page = await browser.newPage();
    saucedemoLoginPage = new SaucedemoLoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    orderCompletionPage = new OrderCompletionPage(page);
});

After(async () => {
    await browser.close();
});

Given('I am on the SauceDemo login page', async () => {
    await saucedemoLoginPage.navigateToLoginPage();
});

When('I enter {string} as username and {string} as password and click login', async (username: string, password: string) => {
    await saucedemoLoginPage.loginCredentials(username, password);
}); 

Then('I should be redirected to the products page', async () => {
    await productsPage.verifyProductsPage();
});

When('I add a {string} to the cart', async (productName: string) => {
    await productsPage.addProductsToCart(productName);
});

When('I navigate to the cart page', async () => {
    await productsPage.navigateToCart();
});

Then('I should see the {string} in the cart', async (product: string) => {
    
    await cartPage.verifyProductInCart(product);
});

When('I checkout the cart', async () => {
    await cartPage.navigateToCheckout();
});

Then('I should see the checkout information page and enter {string} {string} {string} and continue', async (firstName: string, lastName: string, postalCode: string) => {
    await checkoutPage.verifyCheckoutPage();
    await checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
});

Then('I should see the order overview page and finish the order', async () => {
    await checkoutOverviewPage.verifyOverviewPage();
    await checkoutOverviewPage.finishCheckout();
});

Then('I should see the order complete page', async () => {
    await orderCompletionPage.verifyOrderComplate();
});





