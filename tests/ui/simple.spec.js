import { test, expect } from "../fixtures.js";

test.describe("Простые UI тесты", () => {
  test("Главная страница успешно открывается", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Demo Web Shop/);
  });
});
