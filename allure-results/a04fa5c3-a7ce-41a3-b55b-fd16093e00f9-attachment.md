# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> Login >> Login Test Case with valid user
- Location: tests\Login.spec.js:123:5

# Error details

```
TypeError: _LoginPage.default is not a constructor
```

# Test source

```ts
  24  | 
  25  | // //TC 3 
  26  | // test('Valid Username and Invalid Password', async ({ page }) => {
  27  | 
  28  | //   await page.goto('https://www.saucedemo.com/');
  29  | //   await page.fill('#user-name', 'standard_user');
  30  | //   await page.fill('#password', 'abcd');
  31  | //   await page.click('#login-button');
  32  | //   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  33  | 
  34  | // });
  35  | 
  36  | 
  37  | // //TC 4 
  38  | // test('Invalid Username and Invalid Password', async ({ page }) => {
  39  | 
  40  | //   await page.goto('https://www.saucedemo.com/');
  41  | //   await page.fill('#user-name', 'abcd');
  42  | //   await page.fill('#password', 'abcd');
  43  | //   await page.click('#login-button');
  44  | //   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  45  | 
  46  | // });
  47  | 
  48  | // //TC 5
  49  | // test('Empty Username and Invalid Empty', async ({ page }) => {
  50  | 
  51  | //   await page.goto('https://www.saucedemo.com/');
  52  | //   await page.fill('#user-name', '');
  53  | //   await page.fill('#password', '');
  54  | //   await page.click('#login-button');
  55  | //   await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
  56  | 
  57  | // });
  58  | 
  59  | 
  60  | 
  61  | 
  62  | // import { test, expect } from '@playwright/test';
  63  | // import loginData from '../testdata/loginData.json';
  64  | 
  65  | // test('Login Test Case', async ({ page }) => {
  66  | 
  67  | //   const username = loginData.validUsers[0].username;
  68  | //   const password = loginData.validUsers[0].password;
  69  | //   const expectedMessage = loginData.validUsers[0].expectedMessage;
  70  | 
  71  | //   await page.goto('https://adactinhotelapp.com/');
  72  | 
  73  | //   await page.fill('#username', username);
  74  | //   await page.fill('#password', password);
  75  | //   await page.click('#login');
  76  | 
  77  | //   await expect(page.locator('.welcome_menu').first())
  78  | //     .toContainText(expectedMessage);
  79  | 
  80  | // });
  81  | 
  82  | 
  83  | 
  84  | // import { test, expect } from '@playwright/test';
  85  | 
  86  | // import loginData from '../testdata/loginData.json';
  87  | 
  88  | // loginData.validUsers.forEach((data) => {
  89  | 
  90  | //   test(`Login Test for ${data.username}`, async ({ page }) => {
  91  | 
  92  | //     await page.goto('https://adactinhotelapp.com/', {
  93  | //       waitUntil: 'domcontentloaded'
  94  | //    });
  95  | 
  96  | //     await page.fill('#username', data.username);
  97  | 
  98  | //     await page.fill('#password', data.password);
  99  | 
  100 | //     await page.click('#login');
  101 | 
  102 | //     await expect(page.locator('.welcome_menu').first())
  103 | //       .toContainText(data.expectedMessage);
  104 | 
  105 | //   });
  106 | 
  107 | // });
  108 | 
  109 | import { test, expect } from '@playwright/test';
  110 | 
  111 | import loginData from '../testdata/loginData.json';
  112 | 
  113 | import LoginPage from '../pages/LoginPage';
  114 | 
  115 | 
  116 | // ======================================================
  117 | // TC 1 - VALID USERNAME AND VALID PASSWORD
  118 | // ======================================================
  119 | 
  120 | // 
  121 | 
  122 | test.describe('Login', ()=> { 
  123 | test(`Login Test Case with valid user`, async ({page}) => { 
> 124 |   const loginPage = new LoginPage(page); 
      |                     ^ TypeError: _LoginPage.default is not a constructor
  125 |   const data = loginData.validUsers[0]; 
  126 | 
  127 |  await test.step('Open login Page', async() =>{ 
  128 |  await loginPage.gotoLoginPage(); 
  129 | }); 
  130 |  await test.step('Enter credentail and login', async() =>{ 
  131 |  await loginPage.login(data.username, data.password); 
  132 | });
  133 |  await test.step('Verify Welcome Message on Landing page', async() =>{ 
  134 |  await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg); 
  135 |  await loginPage.attachScreenshot('05 - Welcome Message Should be displayed'); 
  136 | }); 
  137 | }); 
  138 | }); 
  139 | 
  140 | // ======================================================
  141 | // TC 2 - INVALID USERNAME AND INVALID PASSWORD
  142 | // ======================================================
  143 | 
  144 | // test('TC 2 - Invalid Username and Invalid Password', async ({ page }) => {
  145 | 
  146 | //   const login = new LoginPage(page);
  147 | 
  148 | //   // Selecting second dataset from JSON
  149 | //   const data = loginData.loginTests[1];
  150 | 
  151 | //   await login.gotoURL();
  152 | 
  153 | //   await login.login(data.username, data.password);
  154 | 
  155 | //   await expect(login.errorMessage)
  156 | //     .toContainText(data.expectedMsg);
  157 | 
  158 | // });
  159 | 
  160 | 
  161 | // ======================================================
  162 | // TC 3 - VALID USERNAME AND INVALID PASSWORD
  163 | // ======================================================
  164 | 
  165 | // test('TC 3 - Valid Username and Invalid Password', async ({ page }) => {
  166 | 
  167 | //   const login = new LoginPage(page);
  168 | 
  169 | //   // Selecting third dataset from JSON
  170 | //   const data = loginData.loginTests[2];
  171 | 
  172 | //   await login.gotoURL();
  173 | 
  174 | //   await login.login(data.username, data.password);
  175 | 
  176 | //   await expect(login.errorMessage)
  177 | //     .toContainText(data.expectedMsg);
  178 | 
  179 | // });
  180 | 
  181 | 
  182 | // ======================================================
  183 | // TC 4 - INVALID USERNAME AND VALID PASSWORD
  184 | // ======================================================
  185 | 
  186 | // test('TC 4 - Invalid Username and Valid Password', async ({ page }) => {
  187 | 
  188 | //   const login = new LoginPage(page);
  189 | 
  190 | //   // Selecting fourth dataset from JSON
  191 | //   const data = loginData.loginTests[3];
  192 | 
  193 | //   await login.gotoURL();
  194 | 
  195 | //   await login.login(data.username, data.password);
  196 | 
  197 | //   await expect(login.errorMessage)
  198 | //     .toContainText(data.expectedMsg);
  199 | 
  200 | // });
  201 | 
  202 | 
  203 | // ======================================================
  204 | // TC 5 - EMPTY USERNAME AND EMPTY PASSWORD
  205 | // ======================================================
  206 | 
  207 | // test('TC 5 - Empty Username and Empty Password', async ({ page }) => {
  208 | 
  209 | //   const login = new LoginPage(page);
  210 | 
  211 | //   // Selecting fifth dataset from JSON
  212 | //   const data = loginData.loginTests[4];
  213 | 
  214 | //   await login.gotoURL();
  215 | 
  216 | //   await login.login(data.username, data.password);
  217 | 
  218 | //   await expect(login.usernameError)
  219 | //     .toHaveText(data.expectedMsg);
  220 | 
  221 | // });
```