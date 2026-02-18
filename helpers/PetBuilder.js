import { faker } from "@faker-js/faker";

class PetBuilder {
  constructor() {
    this.data = {
      id: 0,
      name: "",
      status: "available",
    };
  }

  withRandomData() {
    this.data.id = faker.number.int({ min: 1000, max: 99999 });
    this.data.name = faker.animal.dog();
    return this;
  }

  withName(name) {
    this.data.name = name;
    return this;
  }

  build() {
    return this.data;
  }
}

export default PetBuilder;
