# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SmokeTest\SmokeTest.spec.js >> SauceDemo Smoke Test Suite >> SMOKE TEST - Login → Add to Cart → Checkout → Logout
- Location: SmokeTest\SmokeTest.spec.js:128:7

# Error details

```
TypeError: login.gotoURL is not a function
```

# Test source

```ts
  49  | //   // ======================================================
  50  | 
  51  | //   await checkout.openCart();
  52  | 
  53  | 
  54  | //   // Verify Product
  55  | //   await expect(checkout.productName).toHaveText(data.productName);
  56  | 
  57  | 
  58  | //   // ======================================================
  59  | //   // 4. CHECKOUT
  60  | //   // ======================================================
  61  | 
  62  | //   await checkout.clickCheckout();
  63  | 
  64  | 
  65  | //   // ======================================================
  66  | //   // 5. CUSTOMER INFORMATION
  67  | //   // ======================================================
  68  | 
  69  | //   await checkout.enterFirstName(data.firstName);
  70  | 
  71  | //   await checkout.enterLastName(data.lastName);
  72  | 
  73  | //   await checkout.enterPostalCode(data.postalCode);
  74  | 
  75  | 
  76  | //   // ======================================================
  77  | //   // 6. CONTINUE
  78  | //   // ======================================================
  79  | 
  80  | //   await checkout.clickContinue();
  81  | 
  82  | 
  83  | //   // Verify Product on Overview
  84  | //   await expect(checkout.productName)
  85  | //     .toHaveText(data.productName);
  86  | 
  87  | 
  88  | //   // ======================================================
  89  | //   // 7. FINISH ORDER
  90  | //   // ======================================================
  91  | 
  92  | //   await checkout.clickFinish();
  93  | 
  94  | 
  95  | //   // Verify Order Completed
  96  | //   await expect(checkout.completeMessage)
  97  | //     .toHaveText(data.expectedCompleteMsg);
  98  | 
  99  | 
  100 | //   // ======================================================
  101 | //   // 8. LOGOUT
  102 | //   // ======================================================
  103 | 
  104 | //   await logout.openMenu();
  105 | 
  106 | //   await logout.logout();
  107 | 
  108 | 
  109 | //   // ======================================================
  110 | //   // 9. VERIFY LOGOUT
  111 | //   // ======================================================
  112 | 
  113 | //   await expect(logout.loginButton).toBeVisible();
  114 | 
  115 | // });
  116 | 
  117 | import { test, expect } from '@playwright/test';
  118 | 
  119 | import smokeData from '../testdata/SmokeTest.json';
  120 | 
  121 | import LoginPage from '../pages/LoginPage';
  122 | import CheckOut from '../pages/CheckOut';
  123 | import Logout from '../pages/LogOut';
  124 | 
  125 | 
  126 | test.describe('SauceDemo Smoke Test Suite', () => {
  127 | 
  128 |   test('SMOKE TEST - Login → Add to Cart → Checkout → Logout', async ({ page }) => {
  129 | 
  130 |     /*
  131 |      * TEST DESCRIPTION:
  132 |      * Verify that a user can successfully log in to SauceDemo,
  133 |      * add a product to the cart, proceed through checkout,
  134 |      * complete the order, and logout successfully.
  135 |      */
  136 | 
  137 |     const login = new LoginPage(page);
  138 |     const checkout = new CheckOut(page);
  139 |     const logout = new Logout(page);
  140 | 
  141 |     const data = smokeData.smokeTests[0];
  142 | 
  143 | 
  144 |     // ======================================================
  145 |     // TEST STEP 1: LOGIN TO SAUCEDEMO
  146 |     // ======================================================
  147 | 
  148 |     // Navigate to SauceDemo
> 149 |     await login.gotoURL();
      |                 ^ TypeError: login.gotoURL is not a function
  150 | 
  151 |     // Enter valid username and password
  152 |     await login.login(
  153 |       data.username,
  154 |       data.password
  155 |     );
  156 | 
  157 |     // Verify successful login
  158 |     await expect(login.message.first())
  159 |       .toHaveText('Swag Labs');
  160 | 
  161 | 
  162 |     // ======================================================
  163 |     // TEST STEP 2: ADD PRODUCT TO CART
  164 |     // ======================================================
  165 | 
  166 |     // Add Sauce Labs Backpack to cart
  167 |     await checkout.addProductToCart();
  168 | 
  169 | 
  170 |     // ======================================================
  171 |     // TEST STEP 3: OPEN SHOPPING CART
  172 |     // ======================================================
  173 | 
  174 |     // Open shopping cart
  175 |     await checkout.openCart();
  176 | 
  177 |     // Verify that the expected product is present in the cart
  178 |     await expect(checkout.productName)
  179 |       .toHaveText(data.productName);
  180 | 
  181 | 
  182 |     // ======================================================
  183 |     // TEST STEP 4: PROCEED TO CHECKOUT
  184 |     // ======================================================
  185 | 
  186 |     // Click Checkout button
  187 |     await checkout.clickCheckout();
  188 | 
  189 | 
  190 |     // ======================================================
  191 |     // TEST STEP 5: ENTER CUSTOMER INFORMATION
  192 |     // ======================================================
  193 | 
  194 |     // Enter customer's first name
  195 |     await checkout.enterFirstName(data.firstName);
  196 | 
  197 |     // Enter customer's last name
  198 |     await checkout.enterLastName(data.lastName);
  199 | 
  200 |     // Enter customer's postal code
  201 |     await checkout.enterPostalCode(data.postalCode);
  202 | 
  203 | 
  204 |     // ======================================================
  205 |     // TEST STEP 6: CONTINUE TO ORDER OVERVIEW
  206 |     // ======================================================
  207 | 
  208 |     // Click Continue
  209 |     await checkout.clickContinue();
  210 | 
  211 |     // Verify expected product is displayed on the overview page
  212 |     await expect(checkout.productName)
  213 |       .toHaveText(data.productName);
  214 | 
  215 | 
  216 |     // ======================================================
  217 |     // TEST STEP 7: COMPLETE ORDER
  218 |     // ======================================================
  219 | 
  220 |     // Click Finish to place the order
  221 |     await checkout.clickFinish();
  222 | 
  223 |     // Verify order completion message
  224 |     await expect(checkout.completeMessage)
  225 |       .toHaveText(data.expectedCompleteMsg);
  226 | 
  227 | 
  228 |     // ======================================================
  229 |     // TEST STEP 8: LOGOUT
  230 |     // ======================================================
  231 | 
  232 |     // Open navigation menu
  233 |     await logout.openMenu();
  234 | 
  235 |     // Logout from SauceDemo
  236 |     await logout.logout();
  237 | 
  238 | 
  239 |     // ======================================================
  240 |     // TEST STEP 9: VERIFY LOGOUT
  241 |     // ======================================================
  242 | 
  243 |     // Verify that the user has been logged out successfully
  244 |     await expect(logout.loginButton)
  245 |       .toBeVisible();
  246 | 
  247 |   });
  248 | 
  249 | });
```