import { test, expect } from "@playwright/test";
import PetService from "../../services/PetService.js";
import DataGenerator from "../../helpers/dataGenerator.js";

test.describe("API тесты питомцев", () => {
  let petService;
  let createdPetIds = [];

  test.beforeEach(async ({ request }) => {
    petService = new PetService(request);
  });

  test.afterEach(async () => {
    for (const id of createdPetIds) {
      try {
        await petService.deletePet(id);
      } catch (e) {
        console.log("Не удалось удалить питомца:", id);
      }
    }
    createdPetIds = [];
  });

  test("API Тест 1: Создание нового питомца", async () => {
    const petData = DataGenerator.generatePet();

    const response = await petService.createPet(petData);

    const createdPet = await petService.verifyPetCreated(
      response,
      petData.name
    );
    createdPetIds.push(createdPet.id);
  });

  test("API Тест 2: Получение питомца по ID", async () => {
    const petData = DataGenerator.generatePet();
    const createResponse = await petService.createPet(petData);
    const created = await createResponse.json();
    createdPetIds.push(created.id);

    const response = await petService.getPet(created.id);

    expect(response.status()).toBe(200);
    const pet = await response.json();
    expect(pet.id).toBe(created.id);
    expect(pet.name).toBe(petData.name);
  });

  test("API Тест 3: Обновление данных питомца", async () => {
    const petData = DataGenerator.generatePet();
    const createResponse = await petService.createPet(petData);
    const created = await createResponse.json();
    createdPetIds.push(created.id);

    created.name = "Новое имя";

    const updateResponse = await petService.updatePet(created);

    expect(updateResponse.status()).toBe(200);
    const updated = await updateResponse.json();
    expect(updated.name).toBe("Новое имя");
  });

  test("API Тест 4: Удаление питомца", async () => {
    const petData = DataGenerator.generatePet();
    const createResponse = await petService.createPet(petData);
    const created = await createResponse.json();

    const deleteResponse = await petService.deletePet(created.id);
    expect(deleteResponse.status()).toBe(200);

    const getResponse = await petService.getPet(created.id);
    expect(getResponse.status()).toBe(404);
  });

  test("API Тест 5: Проверка обязательных полей при создании", async () => {
    const petData = DataGenerator.generatePet();
    const response = await petService.createPet(petData);
    const created = await response.json();
    createdPetIds.push(created.id);

    expect(created).toHaveProperty("id");
    expect(created).toHaveProperty("name");
    expect(created).toHaveProperty("status");
    expect(created).toHaveProperty("photoUrls");
  });
});
