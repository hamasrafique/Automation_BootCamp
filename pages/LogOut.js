import { test } from '@playwright/test';

class Logout {

  constructor(page) {

    this.page = page;


    // ======================================================
    // MENU
    // ======================================================

    this.menuButton = page.locator(
      '#react-burger-menu-btn'
    );


    // ======================================================
    // LOGOUT
    // ======================================================

    this.logoutButton = page.locator(
      '#logout_sidebar_link'
    );


    // ======================================================
    // LOGIN PAGE VERIFICATION
    // ======================================================

    this.loginButton = page.locator(
      '#login-button'
    );

  }


  // ======================================================
  // SCREENSHOT METHOD
  // ======================================================

  async attachScreenshot(name) {

    await test.info().attach(name, {
      body: await this.page.screenshot(),
      contentType: 'image/png',
    });

  }


  // ======================================================
  // OPEN MENU
  // ======================================================

  async openMenu() {

    await this.menuButton.click();

    await this.attachScreenshot(
      '13 - Navigation Menu Opened'
    );

  }


  // ======================================================
  // LOGOUT
  // ======================================================

  async logout() {

    await this.logoutButton.click();

    await this.attachScreenshot(
      '14 - User Logged Out'
    );

  }

}

export default Logout;
