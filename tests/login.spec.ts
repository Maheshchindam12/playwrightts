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

  });

});