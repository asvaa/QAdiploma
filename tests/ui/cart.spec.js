import { test, expect } from "@playwright/test";
import ProductPage from "../../pages/ProductPage.js";

test.describe("Корзина покупок", () => {
  test("Товар успешно добавляется в корзину", async ({ page }) => {
    await page.goto("/computing-and-internet");

    const productPage = new ProductPage(page);
    await productPage.addToCart();

    await productPage.verifyAdded();
  });
});
