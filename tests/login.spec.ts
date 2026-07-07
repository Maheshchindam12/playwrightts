import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {

    test('Valid Login', async ({ page }) => {

        // Navigate to the application
        await page.goto('https://www.saucedemo.com/');

        // Enter valid credentials
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');

        // Click Login
        await page.getByRole('button', { name: 'Login' }).click();

        // Verify successful login
        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products')).toBeVisible();

    });

    test('Invalid Login', async ({ page }) => {

        // Navigate to the application
        await page.goto('https://www.saucedemo.com/');

        // Enter invalid credentials
        await page.getByPlaceholder('Username').fill('wrong_user');
        await page.getByPlaceholder('Password').fill('wrong_password');

        // Click Login
        await page.getByRole('button', { name: 'Login' }).click();

        // Locate the error message
        const errorMessage = page.locator('[data-test="error"]');

        // Get the text
        const actualError = await errorMessage.textContent();

        console.log(actualError);

        // Expected text
        const expectedError =
            'Epic sadface: Username and password do not match any user in this service';

        // Compare
        expect(actualError?.trim()).toBe(expectedError);
        await expect(
            page.locator('[data-test="error"]')
        ).toHaveText(expectedError);
    });

    test.describe('SauceDemo Cart Functionality', () => {

        test('Add and Remove Product from Cart', async ({ page }) => {

            // Step 1: Navigate to SauceDemo
            await page.goto('https://www.saucedemo.com/');

            // Step 2: Login
            await page.getByPlaceholder('Username').fill('standard_user');
            await page.getByPlaceholder('Password').fill('secret_sauce');
            await page.getByRole('button', { name: 'Login' }).click();

            // Step 3: Verify successful login
            await expect(page).toHaveURL(/inventory/);
            await expect(page.getByText('Products')).toBeVisible();

            // Step 4: Add Backpack to Cart
            await page.getByRole('button', { name: 'Add to cart' }).first().click();

            // Verify cart badge
            await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

            // Step 5: Open Cart
            await page.locator('.shopping_cart_link').click();

            // Step 6: Verify product exists in cart
            await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

            // Step 7: Remove product
            await page.getByRole('button', { name: 'Remove' }).click();

            // Step 8: Verify cart is empty
            await expect(page.locator('.cart_item')).toHaveCount(0);
            await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

        });

    });

});