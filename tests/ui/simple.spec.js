import { test, expect } from "@playwright/test";

test.describe("Простые UI тесты", () => {
  test("Главная страница успешно открывается", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Demo Web Shop/);
  });

  test("Логотип магазина отображается на главной странице", async ({
    page,
  }) => {
    await page.goto("/");
    const logo = page.locator(".header-logo");
    await expect(logo).toBeVisible();
  });
});
