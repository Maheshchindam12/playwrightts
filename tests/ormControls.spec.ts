import { test, expect } from '@playwright/test';

test.describe('Form Controls Practice', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://demoqa.com/automation-practice-form');

    });

    test('Handle Textboxes', async ({ page }) => {

        await page.getByPlaceholder('First Name').fill('John');

        await page.getByPlaceholder('Last Name').fill('David');

    });

    test('Handle Radio Button', async ({ page }) => {

        await page.getByText('Male', { exact: true }).click();

    });

    test('Handle Checkbox', async ({ page }) => {

        await page.getByText('Sports').click();

    });

    test('Handle State Dropdown', async ({ page }) => {

        await page.locator('#state').click();

        await page.getByText('NCR').click();

    });

    test('Handle City Dropdown', async ({ page }) => {

        await page.locator('#state').click();

        await page.getByText('NCR').click();

        await page.locator('#city').click();

        await page.getByText('Delhi').click();

    });

});