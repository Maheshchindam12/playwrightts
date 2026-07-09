import { test, expect } from '@playwright/test';

test.describe('File Handling and Dialogs', () => {

    test('File Upload', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/upload');

        await page.locator('#file-upload')
            .setInputFiles('test-data/sample.txt');

        await page.locator('#file-submit').click();

        await expect(page.locator('#uploaded-files'))
            .toHaveText('sample.txt');

    });

    test('JavaScript Alert', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        page.on('dialog', async dialog => {

            expect(dialog.message()).toBe('I am a JS Alert');

            await dialog.accept();

        });

        await page.getByRole('button', { name: 'Click for JS Alert' }).click();

        await expect(page.locator('#result'))
            .toHaveText('You successfully clicked an alert');

    });

    test('Confirm Dialog', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        page.on('dialog', async dialog => {

            await dialog.dismiss();

        });

        await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

        await expect(page.locator('#result'))
            .toHaveText('You clicked: Cancel');

    });

    test('Prompt Dialog', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        page.on('dialog', async dialog => {

            await dialog.accept('Playwright');

        });

        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

        await expect(page.locator('#result'))
            .toContainText('Playwright');

    });

    test('File Download', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/download');

        const downloadPromise = page.waitForEvent('download');

        await page.getByText('some-file.txt').click();

        const download = await downloadPromise;

        await download.saveAs('downloads/some-file.txt');

        expect(download.suggestedFilename()).toBe('some-file.txt');

    });


});


test.describe('Frames and Windows', () => {

    test('Handle iframe', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/iframe');

        const frame = page.frameLocator('#mce_0_ifr');

        await frame.locator('#tinymce').clear();

        await frame.locator('#tinymce').fill('Learning Playwright');

        await expect(frame.locator('#tinymce'))
            .toHaveText('Learning Playwright');

    });

    test('Handle new browser tab', async ({ context, page }) => {

        await page.goto('https://the-internet.herokuapp.com/windows');

        const newPagePromise = context.waitForEvent('page');

        await page.getByText('Click Here').click();

        const newPage = await newPagePromise;

        await newPage.waitForLoadState();

        console.log('Title:', await newPage.title());

        console.log('URL:', newPage.url());

        await expect(newPage.getByText('New Window')).toBeVisible();

    });

    test('Count browser tabs', async ({ context, page }) => {

        await page.goto('https://the-internet.herokuapp.com/windows');

        const newPagePromise = context.waitForEvent('page');

        await page.getByText('Click Here').click();

        await newPagePromise;

        console.log('Total Pages:', context.pages().length);

        expect(context.pages().length).toBe(2);

    });

    test('Switch between tabs', async ({ context, page }) => {

        await page.goto('https://the-internet.herokuapp.com/windows');

        const newPagePromise = context.waitForEvent('page');

        await page.getByText('Click Here').click();

        const newPage = await newPagePromise;

        await newPage.waitForLoadState();

        await newPage.bringToFront();

        console.log(await newPage.title());

        await page.bringToFront();

        console.log(await page.title());

    });

});