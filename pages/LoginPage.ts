import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    // constructor(private page: Page) { }

     private usernameInput: Locator = this.page.getByPlaceholder('Username');
    private passwordInput: Locator = this.page.getByPlaceholder('Password');
    private loginButton: Locator = this.page.getByRole('button', { name: 'Login' });

    async navigate() {
        await this.navigateTo(process.env.BASE_URL!);
        // await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string) {
        await this.fill(
            this.usernameInput,
            username
        );
    }

    async enterPassword(password: string) {
        await this.fill(
            this.passwordInput,
            password
        );
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}   