import { test } from "@playwright/test";
import MainPage from "../../pages/MainPage.js";
import RegisterPage from "../../pages/RegisterPage.js";
import DataGenerator from "../../helpers/dataGenerator.js";

test.describe("Регистрация пользователя", () => {
  test("Тест 1: Успешная регистрация нового пользователя", async ({ page }) => {
    const userData = DataGenerator.generateUser();

    const mainPage = new MainPage(page);
    await mainPage.open();

    await mainPage.clickRegister();

    const registerPage = new RegisterPage(page);
    await registerPage.fillForm(userData);
    await registerPage.submit();

    await registerPage.verifySuccess();
  });

  test("Тест 2: Проверка отображения формы регистрации", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.clickRegister();
    const registerPage = new RegisterPage(page);
    await page.waitForURL("**/register");
  });
});
