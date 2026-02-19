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

  test("Удаление товара из корзины работает корректно", async ({ page }) => {
    await page.goto("/computing-and-internet");

    await page.locator('input[value="Add to cart"]').first().click();
    await page.waitForTimeout(1000);

    await page.goto("/cart");

    const removeButton = page.locator('input[name="removefromcart"]').first();
    await removeButton.check();
    await page.locator('input[name="updatecart"]').click();

    await expect(page.locator(".order-summary-content")).toContainText(
      "Your Shopping Cart is empty!"
    );
  });
});
