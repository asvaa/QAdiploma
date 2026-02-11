import { expect } from "@playwright/test";

class MainPage {
  constructor(page) {
    this.page = page;

    this.registerLink = page.locator(".ico-register");
    this.loginLink = page.locator(".ico-login");
    this.accountLink = page.locator(".account");
    this.searchInput = page.locator("#small-searchterms");
    this.searchButton = page.locator('input[value="Search"]');
  }

  async open() {
    await this.page.goto("/");
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async verifyUserLoggedIn(email) {
    await expect(this.accountLink).toHaveText(email);
  }
}

export default MainPage;
