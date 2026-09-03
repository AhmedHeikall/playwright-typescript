import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
    private readonly page: Page;
    private readonly pageTitle: Locator;
    private readonly pageInventoryList: Locator;
    private readonly inventoryItem: Locator;

    constructor(page: Page) {
        this.page = page;

        this.pageTitle = page.locator('span.title:has-text("Products")');

        this.pageInventoryList =
            page.locator('.inventory_list[data-test="inventory-list"]');

        this.inventoryItem =
            this.pageInventoryList.locator('.inventory_item');
    }

    async verifyPageTitleIsVisible() {
        await expect(this.pageTitle).toBeVisible();
    }

    async verifyProductsCount(expectedCount: number) {
        await expect(this.inventoryItem)
            .toHaveCount(expectedCount);
    }

    async getProductsText(): Promise<string[]> {
        return this.inventoryItem.allTextContents();
    }
}