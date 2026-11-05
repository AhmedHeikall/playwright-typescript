import { expect, Locator, Page } from "@playwright/test";

export async function loadHomePage(page: Page, url: string) {
  await page.goto(url);
}

export async function elementIsVisible(webElement: Locator) {
  await expect(webElement).toBeVisible();
}

export async function loginAction(
  page: Page,
  username: string,
  password: string,
) {
  const usernameInput = page.getByPlaceholder("Username");
  const passwordInput = page.getByPlaceholder("Password");
  const loginButton = page.locator("#login-button");

  await usernameInput.fill(username);
  await passwordInput.fill(password);
  await loginButton.click();
}
