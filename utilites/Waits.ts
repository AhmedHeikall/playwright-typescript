import { Page } from "@playwright/test";

export class Waits {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Wait for the page to load completely
  async waitForPageLoad() {
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForLoadState("load");
  }
}
