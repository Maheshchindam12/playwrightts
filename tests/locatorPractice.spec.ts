import { test, expect } from '@playwright/test';

test.describe('Playwright Locator Practice', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('1. getByPlaceholder()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');

        await expect(page.getByPlaceholder('Username')).toHaveValue('standard_user');
    });

    test('2. getByRole()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
    });

    test('3. getByText()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Products')).toBeVisible();
    });

    test('4. locator() using CSS Selector', async ({ page }) => {

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('5. locator() using Attribute Selector', async ({ page }) => {

        await page.locator('[data-test="user-name"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test('6. XPath Locator', async ({ page }) => {

        await page.locator('//input[@id="user-name"]').fill('standard_user');
        await page.locator('//input[@id="password"]').fill('secret_sauce');
        await page.locator('//input[@id="login-button"]').click();

        await expect(page.locator('//span[text()="Products"]')).toBeVisible();
    });

    test('7. filter()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        const backpack = page
            .locator('.inventory_item')
            .filter({ hasText: 'Sauce Labs Backpack' });

        await backpack
            .getByRole('button', { name: 'Add to cart' })
            .click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('8. first()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByRole('button', { name: 'Add to cart' }).first().click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('9. nth()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('10. last()', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByRole('button', { name: 'Add to cart' }).last().click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('11. Chained Locator', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await page
            .locator('.inventory_item')
            .first()
            .getByRole('button', { name: 'Add to cart' })
            .click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('12. Locator Count', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        const products = page.locator('.inventory_item');

        await expect(products).toHaveCount(6);
    });

    test('13. Get Text', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        const title = await page.locator('.title').textContent();

        console.log(title);

        expect(title).toBe('Products');
    });

});