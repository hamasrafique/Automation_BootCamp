# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> Login >> Login Test Case with valid user
- Location: tests\Login.spec.js:270:13

# Error details

```
TypeError: Cannot read properties of undefined (reading '0')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  172 | //   await expect(login.errorMessage)
  173 | //     .toContainText(data.expectedMsg);
  174 | 
  175 | // });
  176 | 
  177 | 
  178 | // ======================================================
  179 | // TC 4 - INVALID USERNAME AND VALID PASSWORD
  180 | // ======================================================
  181 | 
  182 | // test('TC 4 - Invalid Username and Valid Password', async ({ page }) => {
  183 | 
  184 | //   const login = new LoginPage(page);
  185 | 
  186 | //   // Selecting fourth dataset from JSON
  187 | //   const data = loginData.loginTests[3];
  188 | 
  189 | //   await login.gotoURL();
  190 | 
  191 | //   await login.login(data.username, data.password);
  192 | 
  193 | //   await expect(login.errorMessage)
  194 | //     .toContainText(data.expectedMsg);
  195 | 
  196 | // });
  197 | 
  198 | 
  199 | // ======================================================
  200 | // TC 5 - EMPTY USERNAME AND EMPTY PASSWORD
  201 | // ======================================================
  202 | 
  203 | // test('TC 5 - Empty Username and Empty Password', async ({ page }) => {
  204 | 
  205 | //   const login = new LoginPage(page);
  206 | 
  207 | //   // Selecting fifth dataset from JSON
  208 | //   const data = loginData.loginTests[4];
  209 | 
  210 | //   await login.gotoURL();
  211 | 
  212 | //   await login.login(data.username, data.password);
  213 | 
  214 | //   await expect(login.usernameError)
  215 | //     .toHaveText(data.expectedMsg);
  216 | 
  217 | // });
  218 | 
  219 | // import {test, expect} from '@playwright/test';
  220 | // import loginData from '../testdata/loginData.json';
  221 | // import LoginPage from '../pages/LoginPage';
  222 | 
  223 | 
  224 | // test.describe('Login', ()=> {
  225 | //   test(`Login Test Case with valid user`, async ({page}) => {
  226 | //     const loginPage = new LoginPage(page);
  227 | //     const data = loginData.validUsers[0];
  228 | 
  229 | //     await test.step('Open login Page', async() =>{
  230 | //     await loginPage.gotoLoginPage();
  231 | // });
  232 | 
  233 | //     await test.step('Enter credentail and login', async() =>{
  234 | //     await loginPage.login(data.username, data.password);
  235 | // });
  236 | 
  237 | //     await test.step('Verify Welcome Message on Landing page', async() =>{
  238 | //     await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  239 | //     await loginPage.attachScreenshot('05 - Welcome Message Should be displayed');
  240 | // });
  241 | // });
  242 | 
  243 | //   test(`Login Test Case with invalid user`, async ({page}) => {
  244 | //     const loginPage = new LoginPage(page);
  245 | //     const data = loginData.validUsers[1];
  246 | 
  247 | //     await test.step('Open login Page', async() =>{
  248 | //     await loginPage.gotoLoginPage();
  249 | // });
  250 | 
  251 | //     await test.step('Enter credentail and login', async() =>{
  252 | //     await loginPage.login(data.username, data.password);
  253 | // });
  254 | 
  255 | //     await test.step('Verify Welcome Message on Landing page', async() =>{
  256 | //     await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  257 | //     await loginPage.attachScreenshot('05 - Error Message Should be Displayed');
  258 | // });
  259 | // });
  260 | 
  261 | // });
  262 | 
  263 | 
  264 | import { test, expect } from '../fixtures/testSetup.js';
  265 | import loginData from '../testdata/loginData.json' assert { type: 'json' };
  266 | import LoginPage from '../pages/LoginPage.js';
  267 | import { attachStepScreenshot } from '../utils/screenshotUtil.js';
  268 | 
  269 |     test.describe('Login', () => {
  270 |         test('Login Test Case with valid user', async ({ page }) => {
  271 |             const loginPage = new LoginPage(page);
> 272 |             const data = loginData.validUsers[0];
      |                                              ^ TypeError: Cannot read properties of undefined (reading '0')
  273 |                 await test.step('Enter credential and login', async () => {
  274 |                 await loginPage.login(data.username, data.password);
  275 |         });
  276 | 
  277 |         await test.step('Verify Welcome Message on Landing page', async () => {
  278 |             await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  279 |             await attachStepScreenshot(page, '05 - After welcome message verification');
  280 | 
  281 |         });
  282 |     });
  283 | });
```