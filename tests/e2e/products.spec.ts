import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Verify Products Page Items", () => {
  test("displays six products after a successful login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(productsPage.getProductItems).toHaveCount(6);
  });
});
