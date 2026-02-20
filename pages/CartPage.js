class CartPage {
    constructor(page) {
      this.page = page;
      this.removeCheckbox = page.locator('input[name="removefromcart"]').first();
      this.updateCartButton = page.locator('input[name="updatecart"]');
      this.emptyCartMessage = page.locator('.order-summary-content');
    }
  
    async open() {
      await this.page.goto('/cart');
    }
  
    async removeFirstItem() {
      await this.removeCheckbox.check();
      await this.updateCartButton.click();
    }
  
    getEmptyCartMessage() {
      return this.emptyCartMessage;
    }
  }
  
  export default CartPage;