import { test, expect } from "../fixtures.js";
import UserBuilder from "../../helpers/UserBuilder.js";

test.describe("Регистрация пользователя", () => {
  test("Новый пользователь может успешно зарегистрироваться", async ({
    shopFacade,
  }) => {
    const userData = new UserBuilder().withRandomData().build();

    await shopFacade.registerUser(userData);

    const successText = await shopFacade.getRegistrationSuccessText();
    expect(successText).toContain('Your registration completed');
  });

  test("Форма регистрации корректно отображается", async ({ page }) => {
    await page.goto("/register");
    await expect(page).toHaveURL(/.*register/);
  });
});
