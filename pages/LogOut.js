class Logout {

  constructor(page) {

    this.page = page;

    // Menu
    this.menuButton = page.locator('#react-burger-menu-btn');

    // Logout
    this.logoutButton = page.locator('#logout_sidebar_link');

    // Login page verification
    this.loginButton = page.locator('#login-button');
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}

export default Logout;