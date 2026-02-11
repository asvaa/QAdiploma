import { test, expect } from '@playwright/test';

test.describe('Простые UI тесты', () => {

  test('Тест 3: Открытие главной страницы', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com');
    await expect(page).toHaveTitle(/Demo Web Shop/);
  });

  test('Тест 4: Проверка логотипа на главной', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com');
    const logo = page.locator('.header-logo');
    await expect(logo).toBeVisible();
  });

});