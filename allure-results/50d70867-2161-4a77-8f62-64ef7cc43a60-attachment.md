# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> Login >> Login Test Case with valid user
- Location: tests\Login.spec.js:225:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.welcome_menu').first()
Expected: "Welcome to Adactin Group of Hotels"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.welcome_menu').first()

```

```yaml
- table:
  - rowgroup:
    - 'row "AdactIn Group Adactin Group: Hotel Reservation System"':
      - cell "AdactIn Group":
        - img "AdactIn Group"
      - 'cell "Adactin Group: Hotel Reservation System"':
        - 'img "Adactin Group: Hotel Reservation System"'
    - row:
      - cell
- table:
  - rowgroup:
    - 'row "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android. Existing User Login - Build 1 Username Password Forgot Password? Invalid Login details or Your Password might have expired. Click here to reset your password Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
      - cell "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
        - paragraph: Adactin Launches The Adactin Hotel App!
        - table:
          - rowgroup:
            - row "Hotel Image 3":
              - cell "Hotel Image 3":
                - img "Hotel Image 3"
            - row "The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
              - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android."
        - table:
          - rowgroup:
            - row:
              - cell:
                - link:
                  - /url: https://testflight.apple.com/join/Ai3nVPMD
                  - img
              - cell:
                - link:
                  - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
                  - img
      - 'cell "Existing User Login - Build 1 Username Password Forgot Password? Invalid Login details or Your Password might have expired. Click here to reset your password Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
        - table:
          - rowgroup:
            - row "Existing User Login - Build 1":
              - cell "Existing User Login - Build 1"
            - row "Username":
              - cell "Username"
              - cell:
                - textbox
            - row "Password":
              - cell "Password"
              - cell:
                - textbox
            - row "Forgot Password?":
              - cell
              - cell "Forgot Password?":
                - link "Forgot Password?":
                  - /url: ForgotPassword.php
            - row "Invalid Login details or Your Password might have expired. Click here to reset your password":
              - cell
              - cell "Invalid Login details or Your Password might have expired. Click here to reset your password":
                - text: Invalid Login details or Your Password might have expired.
                - link "Click here":
                  - /url: http://adactinhotelapp.com/ForgotPassword.php
                - text: to reset your password
            - row "Login":
              - cell
              - cell "Login":
                - button "Login"
            - row "New User Register Here":
              - cell "New User Register Here":
                - link "New User Register Here":
                  - /url: Register.php
        - table:
          - rowgroup:
            - row "Important Note:":
              - cell "Important Note:"
            - 'row "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
              - 'cell "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
                - text: "Hotel Application has 2 builds:"
                - list:
                  - listitem:
                    - strong: Build 1
                    - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                  - listitem:
                    - strong: Build 2
                    - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                    - link "Go to Build 2":
                      - /url: ../HotelAppBuild2
                      - strong: Go to Build 2
            - 'row "For any queries/issues please email: info@adactin.com"':
              - 'cell "For any queries/issues please email: info@adactin.com"':
                - text: "For any queries/issues please email:"
                - link "info@adactin.com":
                  - /url: mailto:info@adactin.com
- table:
  - rowgroup:
    - row:
      - cell
    - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
      - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
        - text: © 2026 -
        - link "Adactin.com":
          - /url: http://www.adactin.com
        - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  138 | // ======================================================
  139 | 
  140 | // test('TC 2 - Invalid Username and Invalid Password', async ({ page }) => {
  141 | 
  142 | //   const login = new LoginPage(page);
  143 | 
  144 | //   // Selecting second dataset from JSON
  145 | //   const data = loginData.loginTests[1];
  146 | 
  147 | //   await login.gotoURL();
  148 | 
  149 | //   await login.login(data.username, data.password);
  150 | 
  151 | //   await expect(login.errorMessage)
  152 | //     .toContainText(data.expectedMsg);
  153 | 
  154 | // });
  155 | 
  156 | 
  157 | // ======================================================
  158 | // TC 3 - VALID USERNAME AND INVALID PASSWORD
  159 | // ======================================================
  160 | 
  161 | // test('TC 3 - Valid Username and Invalid Password', async ({ page }) => {
  162 | 
  163 | //   const login = new LoginPage(page);
  164 | 
  165 | //   // Selecting third dataset from JSON
  166 | //   const data = loginData.loginTests[2];
  167 | 
  168 | //   await login.gotoURL();
  169 | 
  170 | //   await login.login(data.username, data.password);
  171 | 
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
  219 | import {test, expect} from '@playwright/test';
  220 | import loginData from '../testdata/loginData.json';
  221 | import LoginPage from '../pages/LoginPage';
  222 | 
  223 | 
  224 | test.describe('Login', ()=> {
  225 |   test(`Login Test Case with valid user`, async ({page}) => {
  226 |     const loginPage = new LoginPage(page);
  227 |     const data = loginData.validUsers[0];
  228 | 
  229 |     await test.step('Open login Page', async() =>{
  230 |     await loginPage.gotoLoginPage();
  231 | });
  232 | 
  233 |     await test.step('Enter credentail and login', async() =>{
  234 |     await loginPage.login(data.username, data.password);
  235 | });
  236 | 
  237 |     await test.step('Verify Welcome Message on Landing page', async() =>{
> 238 |     await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
      |                                             ^ Error: expect(locator).toHaveText(expected) failed
  239 |     await loginPage.attachScreenshot('05 - Welcome Message Should be displayed');
  240 | });
  241 | });
  242 | });
```