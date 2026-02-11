import { test, expect } from "@playwright/test";
import ProductPage from "../../pages/ProductPage.js";

test.describe("Корзина покупок", () => {
  test("Тест 5: Добавление товара в корзину", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/computing-and-internet");

    const productPage = new ProductPage(page);
    await productPage.addToCart();

    await productPage.verifyAdded();
  });
});
