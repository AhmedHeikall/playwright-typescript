import { Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class SideMenu extends BasePage {
  private readonly crossButton: Locator = this.page.locator("bm-cross-button");

  private readonly burgerMenuButton: Locator = this.page.locator(
    "#react-burger-menu-btn",
  );

  private readonly logoutLink: Locator = this.page.getByRole("button", {
    name: "Logout",
  });

  private readonly resetAppStateLink: Locator = this.page.getByRole("button", {
    name: "Reset App State",
  });

  get burgerMenuBtn(): Locator {
    return this.burgerMenuButton;
  }

  async clickOnBurgerMenuButton() {
    await this.actions.clickOnElement(this.burgerMenuButton);
  }

  async clickOnLogoutButton() {
    await this.actions.clickOnElement(this.logoutLink);
  }
}
