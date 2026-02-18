import { test as base } from "@playwright/test";
import ShopFacade from "../pages/ShopFacade.js";
import PetService from "../services/PetService.js";

export const test = base.extend({
  shopFacade: async ({ page }, use) => {
    await use(new ShopFacade(page));
  },

  petService: async ({ request }, use) => {
    await use(new PetService(request));
  },
});

export { expect } from "@playwright/test";
