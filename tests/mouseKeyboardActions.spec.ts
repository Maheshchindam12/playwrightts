import { test, expect } from '@playwright/test';

test('Practice all mouse and keyboard actions', async ({ page }) => {

    // ==========================================================
    // 1. Hover
    // ==========================================================

    await page.goto('https://the-internet.herokuapp.com/hovers');

    await page.locator('.figure').first().hover();

    await expect(page.getByText('name: user1')).toBeVisible();

    console.log('Hover completed');

    // ==========================================================
    // 2. Double Click
    // ==========================================================

    await page.goto('https://demoqa.com/buttons');

    await page.getByText('Double Click').dblclick();

    await expect(page.locator('#doubleClickMessage'))
        .toHaveText('You have done a double click');

    console.log('Double Click completed');

    // ==========================================================
    // 3. Right Click
    // ==========================================================

    await page.getByText('Right Click Me').click({
        button: 'right'
    });

    await expect(page.locator('#rightClickMessage'))
        .toHaveText('You have done a right click');

    console.log('Right Click completed');

    // ==========================================================
    // 4. Dynamic Click
    // ==========================================================

    await page.getByText('Click Me').last().click();

    await expect(page.locator('#dynamicClickMessage'))
        .toHaveText('You have done a dynamic click');

    console.log('Dynamic Click completed');

    // ==========================================================
    // 5. Drag and Drop
    // ==========================================================

    await page.goto('https://demoqa.com/droppable');

    await page.locator('#draggable').dragTo(
        page.locator('#droppable')
    );

    await expect(page.locator('#droppable'))
        .toContainText('Dropped!');

    console.log('Drag and Drop completed');

    // ==========================================================
    // 6. Mouse Move
    // ==========================================================

    await page.mouse.move(200, 200);

    await page.mouse.move(500, 300);

    await page.mouse.move(800, 500);

    console.log('Mouse Move completed');

    // ==========================================================
    // 7. Mouse Click using Coordinates
    // ==========================================================

    await page.mouse.click(300, 200);

    console.log('Mouse Coordinate Click completed');

    // ==========================================================
    // 8. Keyboard Typing
    // ==========================================================

    await page.goto('https://demoqa.com/text-box');

    await page.locator('#userName').click();

    await page.keyboard.type('Playwright Automation');

    await expect(page.locator('#userName'))
        .toHaveValue('Playwright Automation');

    console.log('Keyboard Typing completed');

    // ==========================================================
    // 9. Keyboard Shortcuts
    // ==========================================================

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    await page.locator('#userEmail').click();

    await page.keyboard.press('Control+V');

    console.log('Copy Paste completed');

    // ==========================================================
    // 10. Tab Key
    // ==========================================================

    await page.keyboard.press('Tab');

    await page.keyboard.type('Current Address');

    console.log('TAB completed');

    // ==========================================================
    // 11. Shift + Typing
    // ==========================================================

    await page.keyboard.down('Shift');

    await page.keyboard.type('playwright');

    await page.keyboard.up('Shift');

    console.log('Shift typing completed');

    // ==========================================================
    // 12. Arrow Keys
    // ==========================================================

    await page.keyboard.press('ArrowLeft');

    await page.keyboard.press('ArrowRight');

    await page.keyboard.press('ArrowUp');

    await page.keyboard.press('ArrowDown');

    console.log('Arrow Keys completed');

    // ==========================================================
    // 13. Enter
    // ==========================================================

    await page.keyboard.press('Enter');

    console.log('Enter completed');

    // ==========================================================
    // 14. Delete
    // ==========================================================

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Delete');

    console.log('Delete completed');

    // ==========================================================
    // 15. Select All
    // ==========================================================

    await page.locator('#userName').fill('Learning Playwright');

    await page.keyboard.press('Control+A');

    console.log('Select All completed');

    // ==========================================================
    // 16. Copy
    // ==========================================================

    await page.keyboard.press('Control+C');

    console.log('Copy completed');

    // ==========================================================
    // 17. Paste
    // ==========================================================

    await page.locator('#currentAddress').click();

    await page.keyboard.press('Control+V');

    console.log('Paste completed');

    // ==========================================================
    // 18. Hover + Click
    // ==========================================================

    await page.goto('https://demoqa.com/menu');

    await page.getByText('Main Item 2').hover();

    console.log('Hover on Menu completed');

});