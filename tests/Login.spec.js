// import { test, expect } from '@playwright/test';

// //TC 1  
// test('Login Test Case', async ({ page }) => {
//    await page.goto('https://www.saucedemo.com/');
//    await page.fill('#user-name','standard_user');
//    await page.fill('#password','secret_sauce');
//    await page.click('#login-button');
//    await expect(page.locator('#header_container > div.header_secondary_container > span')).toHaveText("Products");
// });


// //TC 2  (
// test('Invalid Username and Valid Password', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', 'abcd');
//   await page.fill('#password', 'secret_sauce');
//   await page.click('#login-button');
//   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');

// });


// //TC 3 
// test('Valid Username and Invalid Password', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'abcd');
//   await page.click('#login-button');
//   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');

// });


// //TC 4 
// test('Invalid Username and Invalid Password', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', 'abcd');
//   await page.fill('#password', 'abcd');
//   await page.click('#login-button');
//   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');

// });

// //TC 5
// test('Empty Username and Invalid Empty', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', '');
//   await page.fill('#password', '');
//   await page.click('#login-button');
//   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');

// });




// import { test, expect } from '@playwright/test';
// import loginData from '../testdata/loginData.json';

// test('Login Test Case', async ({ page }) => {

//   const username = loginData.validUsers[0].username;
//   const password = loginData.validUsers[0].password;
//   const expectedMessage = loginData.validUsers[0].expectedMessage;

//   await page.goto('https://adactinhotelapp.com/');

//   await page.fill('#username', username);
//   await page.fill('#password', password);
//   await page.click('#login');

//   await expect(page.locator('.welcome_menu').first())
//     .toContainText(expectedMessage);

// });



// import { test, expect } from '@playwright/test';

// import loginData from '../testdata/loginData.json';

// loginData.validUsers.forEach((data) => {

//   test(`Login Test for ${data.username}`, async ({ page }) => {

//     await page.goto('https://adactinhotelapp.com/', {
//       waitUntil: 'domcontentloaded'
//     });

//     await page.fill('#username', data.username);

//     await page.fill('#password', data.password);

//     await page.click('#login');

//     await expect(page.locator('.welcome_menu').first())
//       .toContainText(data.expectedMessage);

//   });

// });

// import { test, expect } from '@playwright/test';

// import loginData from '../testdata/loginData.json';

// import LoginPage from '../pages/LoginPage';


// // ======================================================
// // TC 1 - VALID USERNAME AND VALID PASSWORD
// // ======================================================

// test('TC 1 - Valid Username and Valid Password', async ({ page }) => {

//   const login = new LoginPage(page);

//   // Selecting first dataset from JSON
//   const data = loginData.loginTests[0];

//   await login.gotoURL();

//   await login.login(data.username, data.password);

//   await expect(login.message.first()).toHaveText(data.expectedMsg);

// });


// ======================================================
// TC 2 - INVALID USERNAME AND INVALID PASSWORD
// ======================================================

// test('TC 2 - Invalid Username and Invalid Password', async ({ page }) => {

//   const login = new LoginPage(page);

//   // Selecting second dataset from JSON
//   const data = loginData.loginTests[1];

//   await login.gotoURL();

//   await login.login(data.username, data.password);

//   await expect(login.errorMessage)
//     .toContainText(data.expectedMsg);

// });


// ======================================================
// TC 3 - VALID USERNAME AND INVALID PASSWORD
// ======================================================

// test('TC 3 - Valid Username and Invalid Password', async ({ page }) => {

//   const login = new LoginPage(page);

//   // Selecting third dataset from JSON
//   const data = loginData.loginTests[2];

//   await login.gotoURL();

//   await login.login(data.username, data.password);

//   await expect(login.errorMessage)
//     .toContainText(data.expectedMsg);

// });


// ======================================================
// TC 4 - INVALID USERNAME AND VALID PASSWORD
// ======================================================

// test('TC 4 - Invalid Username and Valid Password', async ({ page }) => {

//   const login = new LoginPage(page);

//   // Selecting fourth dataset from JSON
//   const data = loginData.loginTests[3];

//   await login.gotoURL();

//   await login.login(data.username, data.password);

//   await expect(login.errorMessage)
//     .toContainText(data.expectedMsg);

// });


// ======================================================
// TC 5 - EMPTY USERNAME AND EMPTY PASSWORD
// ======================================================

// test('TC 5 - Empty Username and Empty Password', async ({ page }) => {

//   const login = new LoginPage(page);

//   // Selecting fifth dataset from JSON
//   const data = loginData.loginTests[4];

//   await login.gotoURL();

//   await login.login(data.username, data.password);

//   await expect(login.usernameError)
//     .toHaveText(data.expectedMsg);

// });

// import {test, expect} from '@playwright/test';
// import loginData from '../testdata/loginData.json';
// import LoginPage from '../pages/LoginPage';


// test.describe('Login', ()=> {
//   test(`Login Test Case with valid user`, async ({page}) => {
//     const loginPage = new LoginPage(page);
//     const data = loginData.validUsers[0];

//     await test.step('Open login Page', async() =>{
//     await loginPage.gotoLoginPage();
// });

//     await test.step('Enter credentail and login', async() =>{
//     await loginPage.login(data.username, data.password);
// });

//     await test.step('Verify Welcome Message on Landing page', async() =>{
//     await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
//     await loginPage.attachScreenshot('05 - Welcome Message Should be displayed');
// });
// });

//   test(`Login Test Case with invalid user`, async ({page}) => {
//     const loginPage = new LoginPage(page);
//     const data = loginData.validUsers[1];

//     await test.step('Open login Page', async() =>{
//     await loginPage.gotoLoginPage();
// });

//     await test.step('Enter credentail and login', async() =>{
//     await loginPage.login(data.username, data.password);
// });

//     await test.step('Verify Welcome Message on Landing page', async() =>{
//     await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
//     await loginPage.attachScreenshot('05 - Error Message Should be Displayed');
// });
// });

// });


import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
import { attachStepScreenshot } from '../utils/screenshotUtil.js';

    test.describe('Login', () => {
        test('Login Test Case with valid user', async ({ page }) => {
            const loginPage = new LoginPage(page);
            const data = loginData;
                await test.step('Enter credential and login', async () => {
                await loginPage.login(data.username, data.password);
        });

        await test.step('Verify Welcome Message on Landing page', async () => {
            await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - After welcome message verification');

        });
    });
});