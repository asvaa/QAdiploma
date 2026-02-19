import { test as base } from "@playwright/test";
import { ShopFacade } from "../pages/index.js";
import PetService from "../services/PetService.js";

export const test = base.extend({
  shopFacade: async ({ page }, use) => {
    await use(new ShopFacade(page));
  },

  petService: async ({ request }, use) => {
    const baseURL =
      process.env.PETSTORE_BASE_URL || "https://petstore.swagger.io/v2";
    await use(new PetService(request, baseURL));
  },
});

export { expect } from "@playwright/test";
