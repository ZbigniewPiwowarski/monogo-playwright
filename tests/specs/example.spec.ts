import { test, expect } from "@playwright/test";
import CommonPage from "../pageobjects/common";
import { describe } from "node:test";

describe("Main Monogo webpage", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const commonPage = new CommonPage(page);
    await commonPage.goTo("https://monogo.pl/");
  });

  // test("has title", async ({ page }) => {
  //   const commonPage = new CommonPage(page);

  //   await commonPage.haveTitle(/Monogo - E-commerce must be done right!/);
  //   await commonPage.clickFacebookButtonLink();
  //   await commonPage.newPageHaveFacebookUrl();
  // });

  // test("facebook button link", async ({ page }) => {
  //   const commonPage = new CommonPage(page);

  //   await commonPage.clickFacebookButtonLink();
  //   await commonPage.newPageHaveFacebookUrl();
  // });

  // test("instagram button link", async ({ page }) => {
  //   const commonPage = new CommonPage(page);

  //   await commonPage.clickInstagramButtonLink();
  //   await commonPage.newPageHaveInstagramUrl();
  // });

  // test("linkedin button link", async ({ page }) => {
  //   const commonPage = new CommonPage(page);

  //   await commonPage.clickLinkedinButtonLink();
  //   await commonPage.newPageHaveLinkedinUrl();
  // });

  // test("should create a feature request", async ({ request }) => {
  //   const issues = await request.get(
  //     `https://monogo.pl/customer-experience-user-experience-and-design`
  //   );

  //   // show body of response in utf-8
  //   //console.log(await issues.text());

  //   expect(await issues.text()).toContain(
  //     "Projektujemy doskonałe produkty, przeprowadzamy warsztaty oraz badania, aby tworzyć wyjątkowe doświadczenia dla Twoich klientów."
  //   );
  //   expect(issues.status()).toBe(200);
  // });

  test("should test go up button", async ({ page }) => {
    const commonPage = new CommonPage(page);
    await commonPage.scrollToUpButton();
    await commonPage.expectUpButtonVisible();
    await commonPage.clickUpButton();
    await commonPage.expectUpButtonNotVisible();
    await commonPage.expectNaszaOfertaButtonVisible();

    // test
    // test
  });
});
