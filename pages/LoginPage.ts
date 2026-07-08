import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    // constructor(private page: Page) { }

    async navigate() {
        await this.navigateTo(process.env.BASE_URL!);
        // await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string) {
        await this.fill(
            this.page.getByPlaceholder('Username'),
            username
        );
    }

    async enterPassword(password: string) {
        await this.fill(
            this.page.getByPlaceholder('Password'),
            password
        );
    }

    async clickLogin() {
        await this.click(this.page.getByRole('button', { name: 'Login' }));
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}   