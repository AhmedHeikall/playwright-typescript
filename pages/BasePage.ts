import { Page } from "@playwright/test";
import { Actions } from "../utilites/Actions";
import { Waits } from "../utilites/Waits";

export class BasePage {
  protected readonly page: Page;
  public readonly actions: Actions;
  public readonly waits: Waits;

  constructor(page: Page) {
    this.page = page;
    this.actions = new Actions(page);
    this.waits = new Waits(page);
  }
}
