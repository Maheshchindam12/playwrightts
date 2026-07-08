import { expect, Page } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    async addBackpackToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    async verifyProductsPage() {
        await expect(
            this.page.getByText('Products')
        ).toBeVisible();
    }
}