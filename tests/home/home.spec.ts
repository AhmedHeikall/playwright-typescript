import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Home Page Tests", () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    });

    test("TC-001 Home Page loads",
        {
            tag: '@smoke'
        },
        async ({ page }) => {
            await homePage.goToHomePage();
            await expect(page).toHaveURL("https://demo.nopcommerce.com/");
        });

    test("TC-002 Header Logo is visible", async ({ page }) => {
        await homePage.goToHomePage();
        await expect(homePage.headerLogoLocator).toBeVisible();
    });
});

