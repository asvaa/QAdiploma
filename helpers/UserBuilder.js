import { faker } from "@faker-js/faker";

class UserBuilder {
  constructor() {
    this.data = {
      firstName: "",
      lastName: "",
      email: "",
      password: "Test123!",
    };
  }

  withRandomData() {
    this.data.firstName = faker.person.firstName();
    this.data.lastName = faker.person.lastName();
    this.data.email = faker.internet.email();
    return this;
  }

  withEmail(email) {
    this.data.email = email;
    return this;
  }

  build() {
    return this.data;
  }
}

export default UserBuilder;
