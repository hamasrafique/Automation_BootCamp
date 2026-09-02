import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utils/screenshotUtil.js';

class LoginPage {

  constructor(page) {

    this.page = page;

    // Login fields
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');

    // SauceDemo logo
    this.message = page.locator('.app_logo');

    // Error message
    this.errorMessage = page.locator('.error-message-container');
  }


// ismain hune base page se go to url wala function banaliya tha tou wo upr he humne call krwadiya this.page main

    async login(username, password) {
      await test.step('After URL open', async () => {
      await attachStepScreenshot(this.page, '01 - After URL open');
    });

    await test.step('Enter username', async () => {
      await this.username.fill(username);
      await attachStepScreenshot(this.page, '02 - After username');
    });

    await test.step('Enter password', async () => {
      await this.password.fill(password);
      await attachStepScreenshot(this.page, '03 - After password');
    });

    await test.step('Click Login', async () => {
      await this.loginButton.click();
      await attachStepScreenshot(this.page, '04 - After login click');
    });

  }
}

export default LoginPage;
