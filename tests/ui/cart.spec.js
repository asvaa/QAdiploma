import { test, expect } from "../fixtures.js";

test.describe("Корзина покупок", () => {
  test("Товар успешно добавляется в корзину", async ({ page }) => {
    await page.goto("/computing-and-internet");
    
    // Добавить товар в корзину
    await page.locator('input[value="Add to cart"]').first().click();
    
    // Проверить уведомление
    const notification = page.locator('.bar-notification');
    await expect(notification).toBeVisible();
  });
});