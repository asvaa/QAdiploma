import { test, expect } from "../fixtures.js";
import PetBuilder from "../../helpers/PetBuilder.js";

test.describe("API тесты питомцев", () => {
  let createdPetIds = [];

  test.afterEach(async ({ petService }) => {
    for (const id of createdPetIds) {
      try {
        await petService.deletePet(id);
      } catch (e) {
        // Игнорируем ошибки при удалении, так как некоторые тесты могут уже удалить питомца
      }
    }
    createdPetIds = [];
  });

  test("API Тест 1: Создание нового питомца", async ({ petService }) => {
    const petData = new PetBuilder().withRandomData().build();
    const response = await petService.createPet(petData);

    expect(response.status()).toBe(200);
    const createdPet = await response.json();
    expect(createdPet.name).toBe(petData.name);

    createdPetIds.push(createdPet.id);
  });

  test("API Тест 2: Получение питомца по ID", async ({ petService }) => {
    const petData = new PetBuilder().withRandomData().build();
    const createResponse = await petService.createPet(petData);
    const created = await createResponse.json();
    createdPetIds.push(created.id);

    const response = await petService.getPet(created.id);
    expect(response.status()).toBe(200);
    const pet = await response.json();
    expect(pet.id).toBe(created.id);
    expect(pet.name).toBe(petData.name);
  });

  test("API Тест 3: Обновление данных питомца", async ({ petService }) => {
    const petData = new PetBuilder().withRandomData().build();
    const createResponse = await petService.createPet(petData);
    const created = await createResponse.json();
    createdPetIds.push(created.id);

    created.name = "Новое имя";
    const updateResponse = await petService.updatePet(created);
    expect(updateResponse.status()).toBe(200);
    const updated = await updateResponse.json();
    expect(updated.name).toBe("Новое имя");
  });

  test("API Тест 4: Удаление питомца", async ({ petService }) => {
    const petData = new PetBuilder().withRandomData().build();
    const createResponse = await petService.createPet(petData);
    const created = await createResponse.json();

    const deleteResponse = await petService.deletePet(created.id);
    expect(deleteResponse.status()).toBe(200);

    const getResponse = await petService.getPet(created.id);
    expect(getResponse.status()).toBe(404);
  });

  test("API Тест 5: Проверка обязательных полей при создании", async ({
    petService,
  }) => {
    const petData = new PetBuilder().withRandomData().build();
    const response = await petService.createPet(petData);
    const created = await response.json();
    createdPetIds.push(created.id);

    expect(created).toHaveProperty("id");
    expect(created).toHaveProperty("name");
    expect(created).toHaveProperty("status");
    expect(created).toHaveProperty("photoUrls");
  });
});
