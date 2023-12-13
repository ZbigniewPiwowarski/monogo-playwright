import { test, expect, type Page, BrowserContext } from "@playwright/test";

export default class CommonPage {
  private readonly page: Page;
  private readonly context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }

  protected get poznajZespolButton() {
    return this.page.getByRole("link", { name: "POZNAJ ZESPÓŁ" });
  }

  protected get naszaOfertaButton() {
    return this.page.getByRole("link", { name: "Nasza oferta" });
  }

  protected get facebookButtonLink() {
    return this.page.locator('path[data-name="facebook"]');
  }

  protected get instagramButtonLink() {
    return this.page.locator('path[data-name="instagram"]');
  }

  protected get linkedinButtonLink() {
    return this.page.locator('path[data-name="Path 7406"]');
  }

  protected get upButton() {
    return this.page.locator("#Component_20_19");
  }

  public clickFacebookButtonLink() {
    return this.facebookButtonLink.click();
  }

  public clickInstagramButtonLink() {
    return this.instagramButtonLink.click();
  }

  public clickLinkedinButtonLink() {
    return this.linkedinButtonLink.click();
  }

  public clickUpButton() {
    return this.upButton.click();
  }

  public goTo(url: string) {
    return this.page.goto(url);
  }

  private haveUrl(url: RegExp) {
    return expect(this.page).toHaveURL(url);
  }

  public scrollToPoznajZespolButton() {
    return this.poznajZespolButton.scrollIntoViewIfNeeded();
  }

  public async scrollToUpButton() {
    // workaround, one scroll does not scroll to desired position
    await this.upButton.scrollIntoViewIfNeeded();
    return this.upButton.scrollIntoViewIfNeeded();
  }

  public expectUpButtonVisible() {
    return expect(this.upButton).toBeInViewport();
  }

  public expectUpButtonNotVisible() {
    return expect(this.upButton).not.toBeInViewport();
  }

  public expectNaszaOfertaButtonVisible() {
    return expect(this.naszaOfertaButton).toBeVisible();
  }

  public haveTitle(title: RegExp) {
    return expect(this.page).toHaveTitle(title);
  }

  public async newPageHaveFacebookUrl() {
    const [newPage] = await Promise.all([this.context.waitForEvent("page")]);
    await expect(newPage).toHaveURL(/facebook.com/);
  }

  public async newPageHaveInstagramUrl() {
    const [newPage] = await Promise.all([this.context.waitForEvent("page")]);
    await expect(newPage).toHaveURL(/instagram.com/);
  }

  public async newPageHaveLinkedinUrl() {
    const [newPage] = await Promise.all([this.context.waitForEvent("page")]);
    await expect(newPage).toHaveURL(/linkedin.com/);
  }
}