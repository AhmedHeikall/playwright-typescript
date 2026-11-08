import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  private readonly appLogo: Locator = this.page.getByText("Swag Labs", {
    exact: true,
  });
  private readonly burgerMenuButton: Locator = this.page.locator(
    "#react-burger-menu-btn",
  );
  private readonly shoppingCartButton: Locator = this.page.locator(
    ".shopping_cart_link",
  );
  private readonly productsTitle: Locator = this.page.getByText("Products", {
    exact: true,
  });
  private readonly productSortDropdown: Locator = this.page.locator(
    ".product_sort_container",
  );

  private readonly logoutLink: Locator = this.page.getByRole("button", {
    name: "Logout",
  });

  private readonly productItems: Locator = this.page.locator(".inventory_item");

  // Public getters for test assertions
  get logo(): Locator {
    return this.appLogo;
  }

  get burgerMenuBtn(): Locator {
    return this.burgerMenuButton;
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

  async clickOnBurgerMenuButton() {
    await this.actions.clickOnElement(this.burgerMenuButton);
  }

  async clickOnLogoutButton() {
    await this.actions.clickOnElement(this.logoutLink);
  }
}
