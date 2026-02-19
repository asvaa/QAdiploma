class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('input[value="Add to cart"]').first();
    this.notification = page.locator(".bar-notification");
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  getNotification() {
    return this.notification;
  }
}

export default ProductPage;
