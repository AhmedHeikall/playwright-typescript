import { test, expect } from "@playwright/test";
import {
  loadHomePage,
  elementIsVisible,
  loginAction,
} from "../../utilites/helper";

test.describe("Valid Login Page Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await loadHomePage(page, "https://www.saucedemo.com/");
  });

  test("01 - Verify all login page elements are displayed", async ({
    page,
  }) => {
    // Locators
    const pageTitle = page.locator(".login_logo");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginButton = page.locator("#login-button");

    // Assertions
    await expect(pageTitle).toContainText("Swag Labs");
    await elementIsVisible(usernameInput);
    await elementIsVisible(passwordInput);
    await elementIsVisible(loginButton);
    await expect(loginButton).toBeEnabled();
  });

  test("02 - Valid Login functionality", async ({ page }) => {
    // HomePage Locators
    const appLogo = page.locator(".app_logo");
    const productsTitle = page.getByText("Products", { exact: true });
    const burgerMenuButton = page.locator("#react-burger-menu-btn");

    await loginAction(page, "standard_user", "secret_sauce");

    // Assertion
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(appLogo).toBeVisible();
    await expect(productsTitle).toBeVisible();
    await elementIsVisible(burgerMenuButton);
  });

  test("03 - Logout functionality", async ({ page }) => {
    // HomePage Locators
    const burgerMenuButton = page.locator("#react-burger-menu-btn");
    const logoutLink = page.locator("#logout_sidebar_link");

    // Action
    await loginAction(page, "standard_user", "secret_sauce");
    await burgerMenuButton.click();
    await logoutLink.click();

    // Assertion
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });
});

test.describe("Invalid Login Page Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await loadHomePage(page, "https://www.saucedemo.com/");
  });

  test("01 - Invalid username and password", async ({ page }) => {
    await loginAction(page, "invalid_user", "invalid_password");

    // Locators
    const errorMessage = page.locator(".error-message-container.error");

    // Assertion
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("02 - Valid username and empty password", async ({ page }) => {
    await loginAction(page, "standard_user", "");

    // Locators
    const errorMessage = page.locator(".error-message-container.error");

    // Assertion
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(
      "Epic sadface: Password is required",
    );
  });
});
