import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SideMenu } from "../components/SideMenu";

export class ProductsPage extends BasePage {
  public sideMenu = new SideMenu(this.page);
  private readonly appLogo: Locator = this.page.getByText("Swag Labs", {
    exact: true,
  });
  private readonly shoppingCartButton: Locator = this.page.locator(
    ".shopping_cart_link",
  );
  private readonly productsTitle: Locator = this.page.getByText("Products", {
    exact: true,
  });
  private readonly productSortDropdown: Locator = this.page.locator(
    ".product_sort_container",
  );

  private readonly productItems: Locator = this.page.locator(".inventory_item");
  private readonly productNames: Locator = this.page.locator(
    ".inventory_item_name",
  );
  private readonly productPrices: Locator = this.page.locator(
    ".inventory_item_price",
  );

  // Public getters for test assertions
  get logo(): Locator {
    return this.appLogo;
  }

  get shoppingCartBtn(): Locator {
    return this.shoppingCartButton;
  }

  get productsTitleLocator(): Locator {
    return this.productsTitle;
  }

  get sortDropdown(): Locator {
    return this.productSortDropdown;
  }

  get getProductItems(): Locator {
    return this.productItems;
  }

  get productNamesLocator(): Locator {
    return this.productNames;
  }

  get productPricesLocator(): Locator {
    return this.productPrices;
  }

  async clickOnSortDropdown() {
    await this.actions.clickOnElement(this.productSortDropdown);
  }

  async SelectSortOption(option: string | RegExp) {
    await this.clickOnSortDropdown();
    await this.page.getByRole("option", { name: option }).click();
  }
}
