import { test, expect } from "../fixtures.js";

test.describe("Корзина покупок", () => {
  test("Товар успешно добавляется в корзину", async ({ shopFacade, page }) => {
    await page.goto("/computing-and-internet");

    await shopFacade.addToCart();

    const notification = shopFacade.productPage.getNotification();
    await expect(notification).toBeVisible();
  });
});
