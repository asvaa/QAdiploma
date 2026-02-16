import { test } from "@playwright/test";
import MainPage from "../../pages/MainPage.js";
import RegisterPage from "../../pages/RegisterPage.js";
import DataGenerator from "../../helpers/dataGenerator.js";

test.describe("Регистрация пользователя", () => {
  test("Новый пользователь может успешно зарегистрироваться", async ({
    page,
  }) => {
    const userData = DataGenerator.generateUser();

    const mainPage = new MainPage(page);
    await mainPage.open();

    await mainPage.clickRegister();

    const registerPage = new RegisterPage(page);
    await registerPage.register(userData);

    const successMessage = registerPage.getSuccessMessage();
    await expect(successMessage).toContainText("Your registration completed");
  });

  test("Форма регистрации корректно отображается", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.clickRegister();
    const registerPage = new RegisterPage(page);
    await page.waitForURL("**/register");
  });
});
