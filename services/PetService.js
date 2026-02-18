import { test } from "@playwright/test";

class PetService {
  constructor(request, baseURL = "https://petstore.swagger.io/v2") {
    this.request = request;
    this.baseURL = baseURL;
  }

  async createPet(petData) {
    return await test.step("Создать питомца", async () => {
      const response = await this.request.post(`${this.baseURL}/pet`, {
        data: petData,
      });
      return response;
    });
  }

  async getPet(petId) {
    return await test.step(`Получить питомца по ID: ${petId}`, async () => {
      const response = await this.request.get(`${this.baseURL}/pet/${petId}`);
      return response;
    });
  }

  async updatePet(petData) {
    return await test.step("Обновить данные питомца", async () => {
      const response = await this.request.put(`${this.baseURL}/pet`, {
        data: petData,
      });
      return response;
    });
  }

  async deletePet(petId) {
    return await test.step(`Удалить питомца: ${petId}`, async () => {
      const response = await this.request.delete(
        `${this.baseURL}/pet/${petId}`
      );
      return response;
    });
  }
}

export default PetService;
