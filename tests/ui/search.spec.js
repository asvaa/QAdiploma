import { test, expect } from "../fixtures.js";

test.describe("Поиск товаров", () => {
  test("Поиск существующего товара возвращает результаты", async ({
    shopFacade,
    page,
  }) => {
    await shopFacade.searchProduct("book");

    const products = shopFacade.searchPage.getProductItems();
    await expect(products.first()).toBeVisible();
    await expect(page).toHaveURL(/search/);
  });

  test("Поиск несуществующего товара показывает сообщение об отсутствии результатов", async ({
    shopFacade,
    page,
  }) => {
    await shopFacade.searchProduct("xyz123notexist999");

    await expect(page).toHaveURL(/search/);
    const noResults = shopFacade.searchPage.getNoResultsMessage();
    await expect(noResults).toBeVisible({ timeout: 5000 });
  });
});
