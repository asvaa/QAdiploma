import { expect } from "@playwright/test";

class RegisterPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.locator("#FirstName");
    this.lastNameInput = page.locator("#LastName");
    this.emailInput = page.locator("#Email");
    this.passwordInput = page.locator("#Password");
    this.confirmPasswordInput = page.locator("#ConfirmPassword");
    this.registerButton = page.locator("#register-button");
    this.successMessage = page.locator(".result");
  }

  async fillForm(userData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.password);
  }

  async submit() {
    await this.registerButton.click();
  }

  async verifySuccess() {
    await expect(this.successMessage).toHaveText("Your registration completed");
  }
}

export default RegisterPage;
