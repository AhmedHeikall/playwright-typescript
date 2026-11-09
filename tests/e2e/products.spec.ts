import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import {
  expectedProducts,
  standardUserCredentials,
} from "../../test-data/products";

test.describe("Verify Products Page Items", () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(
      standardUserCredentials.username,
      standardUserCredentials.password,
    );
  });

  test("displays the expected number of products", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(productsPage.getProductItems).toHaveCount(
      expectedProducts.length,
    );
  });

  test("displays the expected product names and prices", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(productsPage.productNamesLocator).toHaveText([
      ...expectedProducts.map((product) => product.name),
    ]);
    await expect(productsPage.productPricesLocator).toHaveText([
      ...expectedProducts.map((product) => product.price),
    ]);
  });

  test("sorts products by name from A to Z", async () => {
    const expectedProductsByName = [...expectedProducts].sort((first, second) =>
      first.name.localeCompare(second.name),
    );

    await productsPage.selectSortOption("Name (A to Z)");

    await expect(productsPage.productNamesLocator).toHaveText(
      expectedProductsByName.map((product) => product.name),
    );
  });

  test("sorts products by price from low to high", async () => {
    const expectedProductsByPrice = [...expectedProducts].sort(
      (first, second) =>
        Number(first.price.replace("$", "")) -
        Number(second.price.replace("$", "")),
    );

    await productsPage.selectSortOption("Price (low to high)");

    await expect(productsPage.productPricesLocator).toHaveText(
      expectedProductsByPrice.map((product) => product.price),
    );
    await expect(productsPage.productNamesLocator).toHaveText(
      expectedProductsByPrice.map((product) => product.name),
    );
  });
});
