import { Locator, Page } from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    private readonly NOP_COMMERECE_URL: string = "https://demo.nopcommerce.com/";
    private readonly headerLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerLogo = page.locator(".header-logo a img");
    }

    public async goToHomePage() {
        await this.page.goto(this.NOP_COMMERECE_URL);
    }

    public get headerLogoLocator(): Locator {
        return this.headerLogo;
    }

}