import { expect } from "@playwright/test";

class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('input[value="Add to cart"]').first();
    this.notification = page.locator(".bar-notification");
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async verifyAdded() {
    await expect(this.notification).toBeVisible();
  }
}

export default ProductPage;
