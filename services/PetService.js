import { expect } from '@playwright/test';

class PetService {
  
  constructor(request) {
    this.request = request;
    this.baseURL = 'https://petstore.swagger.io/v2';
  }
  async createPet(petData) {
    const response = await this.request.post(`${this.baseURL}/pet`, {
      data: petData
    });
    return response;
  }

  async getPet(petId) {
    const response = await this.request.get(`${this.baseURL}/pet/${petId}`);
    return response;
  }

  async updatePet(petData) {
    const response = await this.request.put(`${this.baseURL}/pet`, {
      data: petData
    });
    return response;
  }


  async deletePet(petId) {
    const response = await this.request.delete(`${this.baseURL}/pet/${petId}`);
    return response;
  }

  async verifyPetCreated(response, expectedName) {
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.name).toBe(expectedName);
    return data;
  }
}

export default PetService;