import { Locator, Page } from "@playwright/test";

export class Actions {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterTextToElementFiled(elementLocator: Locator, text: string) {
    await elementLocator.fill(text);
  }

  async clickOnElement(elementLocator: Locator) {
    await elementLocator.click();
  }
}
