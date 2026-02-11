import { faker } from "@faker-js/faker";

class DataGenerator {
  static generateUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      firstName: firstName,
      lastName: lastName,
      email: faker.internet.email({ firstName, lastName }).toLowerCase(),
      password: "Test123!" + faker.string.alphanumeric(4),
    };
  }

  static generatePet() {
    return {
      id: faker.number.int({ min: 10000, max: 99999 }),
      name: faker.animal.dog(),
      status: "available",
      photoUrls: ["https://example.com/photo.jpg"],
    };
  }
}

export default DataGenerator;
