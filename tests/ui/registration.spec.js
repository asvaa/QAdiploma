import { test, expect } from "../fixtures.js";
import { UserBuilder } from "../../helpers/index.js";

test.describe("Регистрация пользователя", () => {
  test("Новый пользователь может успешно зарегистрироваться", async ({
    shopFacade,
  }) => {
    const userData = new UserBuilder().withRandomData().build();
    await shopFacade.registerUser(userData);
    const successText = await shopFacade.getRegistrationSuccessText();
    expect(successText).toContain("Your registration completed");
  });

  test("Удаление товара из корзины работает корректно", async ({
    shopFacade,
    page,
  }) => {
    await page.goto("/computing-and-internet");

    await shopFacade.addToCart();

    await expect(shopFacade.productPage.getNotification()).toBeVisible();

    await shopFacade.cartPage.open();
    await shopFacade.cartPage.removeFirstItem();

    const emptyMessage = shopFacade.cartPage.getEmptyCartMessage();
    await expect(emptyMessage).toContainText("Your Shopping Cart is empty!");
  });
});
