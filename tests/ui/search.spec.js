import { test, expect } from "@playwright/test";
import MainPage from "../../pages/MainPage.js";

test.describe("Поиск товаров", () => {
  test("Тест 3: Поиск существующего товара", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    await mainPage.searchProduct("book");

    const products = page.locator(".product-item");
    await expect(products.first()).toBeVisible();

    await expect(page).toHaveURL(/search/);
  });

  test("Тест 4: Поиск несуществующего товара", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    await mainPage.searchProduct("xyz123notexist999");

    await expect(page).toHaveURL(/search/);

    const noResults = page.locator(".no-result, .search-results");
    await expect(noResults).toBeVisible({ timeout: 5000 });
  });
});
