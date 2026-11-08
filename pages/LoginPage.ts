import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly baseUrl: string = "https://www.saucedemo.com";
  private readonly appLogo: Locator = this.page.locator(".login_logo");
  private readonly usernameInput: Locator = this.page.getByRole("textbox", {
    name: "Username",
  });
  private readonly passwordInput: Locator = this.page.getByRole("textbox", {
    name: "Password",
  });
  private readonly loginButton: Locator = this.page.getByRole("button", {
    name: "Login",
  });
  private readonly errorMessage: Locator = this.page.locator(
    ".error-message-container.error",
  );

  // Public getters for test assertions
  get usernameField(): Locator {
    return this.usernameInput;
  }

  get passwordField(): Locator {
    return this.passwordInput;
  }

  get loginBtn(): Locator {
    return this.loginButton;
  }

  get errorMessageLocator(): Locator {
    return this.errorMessage;
  }

  get logo(): Locator {
    return this.appLogo;
  }

  // Page Actions

  async goToLoginPage() {
    await this.page.goto(this.baseUrl);
  }

  async enterUsername(username: string) {
    await this.actions.enterTextToElementFiled(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.actions.enterTextToElementFiled(this.passwordInput, password);
  }

  async clickOnLoginButton() {
    await this.actions.clickOnElement(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickOnLoginButton();
  }
}
