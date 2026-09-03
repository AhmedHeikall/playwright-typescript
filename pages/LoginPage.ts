import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    private readonly BASE_URL = "https://www.saucedemo.com/";

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('h3[data-test="error"]')
    }


    async navigate() {
        await this.page.goto(this.BASE_URL);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() ?? "";
    }

    async verifyErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }
}