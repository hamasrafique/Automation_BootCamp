// class LoginPage {

//    constructor(page)
//    {
//      this.page = page;
//      this.username = page.locator('#username');
//      this.password = page.locator('#password');
//      this.loginButton = page.locator('#login');
//      this.message = page.locator('.welcome_menu');

//    }
//    async gotoURL()
//    {
    
//         await this.page.goto('https://adactinhotelapp.com/');
    
//    }
//    async login(username, password)
//   {
//    await this.username.fill(username);
//    await this.password.fill(password);
//    await this.loginButton.click();
//   }
// }
// export default LoginPage;

// class LoginPage {

//   constructor(page) {

//     this.page = page;

//     // Login fields
//     this.username = page.locator('#username');
//     this.password = page.locator('#password');
//     this.loginButton = page.locator('#login');

//     // Messages
//     this.message = page.locator('.welcome_menu');
//     this.errorMessage = page.locator('.auth_error');
//     this.usernameError = page.locator('#username_span');
//   }


//   async gotoURL() {
//     await this.page.goto('https://adactinhotelapp.com/');
//   }


//   async login(username, password) {
//     await this.username.fill(username);
//     await this.password.fill(password);
//     await this.loginButton.click();
//   }

// }

// export default LoginPage;

class LoginPage {

  constructor(page) {

    this.page = page;

    // Login fields
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');

    // Messages
    this.message = page.locator('.app_logo');
    this.errorMessage = page.locator('.error-message-container');
    // this.usernameError = page.locator('#username_span');
  }


  async gotoURL() {
    await this.page.goto('https://www.saucedemo.com/');
  }


  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

}

export default LoginPage;