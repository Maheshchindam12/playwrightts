import { Page, Locator } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) { }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async getButton(buttonName: string) {
        return this.page.getByRole('button', { name: buttonName });
    }

    async clickButton(buttonName: string) {
        await this.click(await this.getButton(buttonName));
    }

    async getInput(placeholder: string) {
        return this.page.getByPlaceholder(placeholder);
    }

    async enterValue(fieldName: string, value: string) {
        await this.fill(await this.getInput(fieldName), value);
    }

    async getTextLocator(text: string) {
        return this.page.getByText(text);
    }



}