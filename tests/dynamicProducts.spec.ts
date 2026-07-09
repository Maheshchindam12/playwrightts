import { test, expect } from '@playwright/test';

test.describe('Dynamic Products', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Products')).toBeVisible();

    });

    test('Print all product names', async ({ page }) => {

        const products = page.locator('.inventory_item_name');

        const count = await products.count();

        console.log(`Total Products : ${count}`);

        for (let i = 0; i < count; i++) {

            const productName = await products.nth(i).textContent();

            console.log(productName);

        }

    });

    test('Print all product prices', async ({ page }) => {

        const prices = page.locator('.inventory_item_price');

        const count = await prices.count();

        console.log(`Total Prices : ${count}`);

        for (let i = 0; i < count; i++) {

            const price = await prices.nth(i).textContent();

            console.log(price);

        }

    });

    test('Verify total number of products', async ({ page }) => {

        const products = page.locator('.inventory_item');

        await expect(products).toHaveCount(6);

    });

    test('Add product dynamically using filter()', async ({ page }) => {

        const productName = 'Sauce Labs Backpack';

        await page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Add to cart' })
            .click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    });

    test('Add product dynamically using loop', async ({ page }) => {

        const targetProduct = 'Sauce Labs Bike Light';

        const products = page.locator('.inventory_item');

        const count = await products.count();

        for (let i = 0; i < count; i++) {

            const product = products.nth(i);

            const name = await product
                .locator('.inventory_item_name')
                .textContent();

            if (name === targetProduct) {

                await product
                    .getByRole('button', { name: 'Add to cart' })
                    .click();

                console.log(`${targetProduct} added successfully`);

                break;
            }
        }

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    });

    test('Print all product names using allTextContents()', async ({ page }) => {

        const names = await page
            .locator('.inventory_item_name')
            .allTextContents();

        console.log(names);

        expect(names).toContain('Sauce Labs Backpack');

    });

    test('Print all prices using allTextContents()', async ({ page }) => {

        const prices = await page
            .locator('.inventory_item_price')
            .allTextContents();

        console.log(prices);

    });

    test('Print product names and prices together', async ({ page }) => {

        const products = page.locator('.inventory_item');

        const count = await products.count();

        for (let i = 0; i < count; i++) {

            const product = products.nth(i);

            const name = await product
                .locator('.inventory_item_name')
                .textContent();

            const price = await product
                .locator('.inventory_item_price')
                .textContent();

            console.log(`${name} --> ${price}`);

        }

    });

});