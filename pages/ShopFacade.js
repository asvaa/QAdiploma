import { test } from "@playwright/test";
import MainPage from "./MainPage.js";
import RegisterPage from "./RegisterPage.js";
import ProductPage from "./ProductPage.js";

class ShopFacade {
  constructor(page) {
    this.page = page;
    this.mainPage = new MainPage(page);
    this.registerPage = new RegisterPage(page);
    this.productPage = new ProductPage(page);
  }

  async openMainPage() {
    await test.step("Открыть главную страницу", async () => {
      await this.mainPage.open();
    });
  }

  async registerUser(userData) {
    await test.step("Зарегистрировать нового пользователя", async () => {
      await this.mainPage.open();
      await this.mainPage.clickRegister();
      await this.registerPage.register(userData);
    });
  }

  async getRegistrationSuccessText() {
    const element = this.registerPage.getSuccessMessage();
    return await element.textContent();
  }

  async searchProduct(productName) {
    await test.step(`Поиск товара: ${productName}`, async () => {
      await this.mainPage.open();
      await this.mainPage.searchProduct(productName);
    });
  }

  async addToCart() {
    await test.step("Добавить товар в корзину", async () => {
      await this.productPage.addToCart();
    });
  }
}

export default ShopFacade;
