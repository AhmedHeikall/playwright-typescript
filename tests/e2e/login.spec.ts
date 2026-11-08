import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Valid Login Page Test Suite", () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goToLoginPage();
  });

  test("01 - Verify all login page elements are displayed and ensure the login page starts in a clean state.", async ({
    page,
  }) => {
    // HomePage URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    // Verify Application Logo
    await expect(loginPage.logo).toHaveText("Swag Labs");
    await expect(loginPage.logo).toBeVisible();

    // Verify Username Filed
    await expect(loginPage.usernameField).toBeVisible();
    await expect(loginPage.usernameField).toBeEnabled();
    await expect(loginPage.usernameField).toHaveValue("");

    // Verify Password Filed
    await expect(loginPage.passwordField).toBeVisible();
    await expect(loginPage.passwordField).toBeEnabled();
    await expect(loginPage.passwordField).toHaveValue("");

    // Verify Login Button
    await expect(loginPage.loginBtn).toBeVisible();
    await expect(loginPage.loginBtn).toBeEnabled();

    // Error Message
    await expect(loginPage.errorMessageLocator).toBeHidden();
  });

  test("02 - Valid Login functionality", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(productsPage.logo).toBeVisible();
    await expect(productsPage.burgerMenuBtn).toBeVisible();
    await expect(productsPage.shoppingCartBtn).toBeVisible();
    await expect(productsPage.productsTitleLocator).toBeVisible();
    await expect(productsPage.sortDropdown).toBeVisible();
  });

  test("03 - Logout functionality", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.clickOnBurgerMenuButton();
    await productsPage.clickOnLogoutButton();

    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.usernameField).toBeVisible();
    await expect(loginPage.passwordField).toBeVisible();
    await expect(loginPage.loginBtn).toBeVisible();
  });
});

test.describe("Invalid Login Page Test Suite", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
  });

  test("01 - Invalid username and password", async () => {
    await loginPage.login("invalid_user", "invalid_password");

    await expect(loginPage.errorMessageLocator).toBeVisible();
    await expect(loginPage.errorMessageLocator).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("02 - Valid username and empty password", async () => {
    await loginPage.login("standard_user", "");

    await expect(loginPage.errorMessageLocator).toBeVisible();
    await expect(loginPage.errorMessageLocator).toContainText(
      "Epic sadface: Password is required",
    );
  });
});
