// import { test, expect } from '@playwright/test';

// import smokeData from '../testdata/SmokeTest.json';

// import LoginPage from '../pages/LoginPage';

// import CheckOut from '../pages/CheckOut';

// import Logout from '../pages/LogOut';


// test('SMOKE TEST - Login → Add to Cart → Checkout → Logout', async ({ page }) => {

//   const login = new LoginPage(page);

//   const checkout = new CheckOut(page);

//   const logout = new Logout(page);

//   const data = smokeData.smokeTests[0];


//   // ======================================================
//   // 1. LOGIN
//   // ======================================================

//   await login.gotoURL();

//   await login.login(
//     data.username,
//     data.password
//   );


//   // Verify Login
//   await expect(login.message.first())
//     .toHaveText('Swag Labs');


//   // ======================================================
//   // 2. ADD PRODUCT TO CART
//   // ======================================================

//   await checkout.addProductToCart();


//   // ======================================================
//   // 3. OPEN CART
//   // ======================================================

//   await checkout.openCart();


//   // Verify Product
//   await expect(checkout.productName).toHaveText(data.productName);


//   // ======================================================
//   // 4. CHECKOUT
//   // ======================================================

//   await checkout.clickCheckout();


//   // ======================================================
//   // 5. CUSTOMER INFORMATION
//   // ======================================================

//   await checkout.enterFirstName(data.firstName);

//   await checkout.enterLastName(data.lastName);

//   await checkout.enterPostalCode(data.postalCode);


//   // ======================================================
//   // 6. CONTINUE
//   // ======================================================

//   await checkout.clickContinue();


//   // Verify Product on Overview
//   await expect(checkout.productName)
//     .toHaveText(data.productName);


//   // ======================================================
//   // 7. FINISH ORDER
//   // ======================================================

//   await checkout.clickFinish();


//   // Verify Order Completed
//   await expect(checkout.completeMessage)
//     .toHaveText(data.expectedCompleteMsg);


//   // ======================================================
//   // 8. LOGOUT
//   // ======================================================

//   await logout.openMenu();

//   await logout.logout();


//   // ======================================================
//   // 9. VERIFY LOGOUT
//   // ======================================================

//   await expect(logout.loginButton).toBeVisible();

// });

// import { test, expect } from '@playwright/test';

// import smokeData from '../testdata/SmokeTest.json';

// import LoginPage from '../pages/LoginPage.js';
// import CheckOut from '../pages/CheckOut.js';
// import Logout from '../pages/LogOut.js';


// test.describe('SauceDemo Smoke Test Suite', () => {

//   test(
//     'SMOKE TEST - Login → Add to Cart → Checkout → Logout',
//     async ({ page }) => {

//       const login = new LoginPage(page);
//       const checkout = new CheckOut(page);
//       const logout = new Logout(page);

//       const data = smokeData.smokeTests[0];


//       // ======================================================
//       // TEST STEP 1
//       // ======================================================

//       await test.step(
//         'Step 1: Open SauceDemo Login Page',
//         async () => {

//           await login.gotoLoginPage();

//         }
//       );


//       // ======================================================
//       // TEST STEP 2
//       // ======================================================

//       await test.step(
//         'Step 2: Login with valid username and password',
//         async () => {

//           await login.login(
//             data.username,
//             data.password
//           );

//         }
//       );


//       // ======================================================
//       // TEST STEP 3
//       // ======================================================

//       await test.step(
//         'Step 3: Verify successful login',
//         async () => {

//           await expect(login.message)
//             .toHaveText('Swag Labs');

//         }
//       );


//       // ======================================================
//       // TEST STEP 4
//       // ======================================================

//       await test.step('Step 4: Add Sauce Labs Backpack to cart', async () => {
//         await checkout.addProductToCart();
//       }
//       );


//       // ======================================================
//       // TEST STEP 5
//       // ======================================================

//       await test.step(
//         'Step 5: Open shopping cart',
//         async () => {

//           await checkout.openCart();

//         }
//       );


//       // ======================================================
//       // TEST STEP 6
//       // ======================================================

//       await test.step(
//         'Step 6: Verify Sauce Labs Backpack is present in cart',
//         async () => {

//           await expect(checkout.productName)
//             .toHaveText(data.productName);

//         }
//       );


//       // ======================================================
//       // TEST STEP 7
//       // ======================================================

//       await test.step(
//         'Step 7: Proceed to checkout',
//         async () => {

//           await checkout.clickCheckout();

//         }
//       );


//       // ======================================================
//       // TEST STEP 8
//       // ======================================================

//       await test.step(
//         'Step 8: Enter customer first name',
//         async () => {

//           await checkout.enterFirstName(
//             data.firstName
//           );

//         }
//       );


//       // ======================================================
//       // TEST STEP 9
//       // ======================================================

//       await test.step(
//         'Step 9: Enter customer last name',
//         async () => {

//           await checkout.enterLastName(
//             data.lastName
//           );

//         }
//       );


//       // ======================================================
//       // TEST STEP 10
//       // ======================================================

//       await test.step(
//         'Step 10: Enter customer postal code',
//         async () => {

//           await checkout.enterPostalCode(
//             data.postalCode
//           );

//         }
//       );


//       // ======================================================
//       // TEST STEP 11
//       // ======================================================

//       await test.step(
//         'Step 11: Continue to order overview',
//         async () => {

//           await checkout.clickContinue();

//         }
//       );


//       // ======================================================
//       // TEST STEP 12
//       // ======================================================

//       await test.step(
//         'Step 12: Verify product on order overview',
//         async () => {

//           await expect(checkout.productName)
//             .toHaveText(data.productName);

//         }
//       );


//       // ======================================================
//       // TEST STEP 13
//       // ======================================================

//       await test.step(
//         'Step 13: Finish and place the order',
//         async () => {

//           await checkout.clickFinish();

//         }
//       );


//       // ======================================================
//       // TEST STEP 14
//       // ======================================================

//       await test.step(
//         'Step 14: Verify order completion message',
//         async () => {

//           await expect(checkout.completeMessage)
//             .toHaveText(data.expectedCompleteMsg);

//         }
//       );


//       // ======================================================
//       // TEST STEP 15
//       // ======================================================

//       await test.step(
//         'Step 15: Open navigation menu',
//         async () => {

//           await logout.openMenu();

//         }
//       );


//       // ======================================================
//       // TEST STEP 16
//       // ======================================================

//       await test.step(
//         'Step 16: Logout from SauceDemo',
//         async () => {

//           await logout.logout();

//         }
//       );


//       // ======================================================
//       // TEST STEP 17
//       // ======================================================

//       await test.step(
//         'Step 17: Verify user is successfully logged out',
//         async () => {

//           await expect(logout.loginButton)
//             .toBeVisible();

//         }
//         await attachStepScreenshot(page, '05 - After welcome message verification')
//       );

//     }
//   );

// });



// import { test, expect } from '../fixtures/testSetup.js';
// import loginData from '../testdata/loginData.json' assert { type: 'json' };
// import LoginPage from '../pages/LoginPage.js';
// import { attachStepScreenshot } from '../utils/screenshotUtil.js';
// import CheckOut from '../pages/CheckOut.js';
// import Logout from '../pages/LogOut.js';


// test.describe('Smoke Suite', () => {
//   test('Login Test Case with valid user', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const data = loginData;
//     await test.step('Enter credential and login', async () => {
//       await loginPage.login(data.username, data.password);
//     });

//     await test.step('Verify Welcome Message on Landing page', async () => {
//       await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
//       await attachStepScreenshot(page, '05 - After welcome message verification');

//     });
//     await test.step('04: Add Sauce Labs Backpack to cart', async () => {
//       await checkout.addProductToCart();
//       await attachStepScreenshot(page, '06 - AddToCart Product');
//     }
//     );
//     await test.step('05: Open shopping cart', async () => {
//       await checkout.openCart();
//       await attachStepScreenshot(page, '07 - Open Cart To Check Product');
//     }
//     );
//     await test.step('06: Verify Sauce Labs Backpack is present in cart', async () => {
//       await expect(checkout.productName).toHaveText(data.productName);
//       await attachStepScreenshot(page, '08 - Verify Sauce Labs Backpack is present in cart');
//     }
//     );
//     await test.step('07: Proceed to checkout', async () => {
//       await checkout.clickCheckout();
//       await attachStepScreenshot(page, '09 - CheckOut');
//     }
//     );

//     await test.step(
//       'Step 9: Enter customer last name',
//       async () => {
//         await checkout.enterLastName(
//           data.lastName
//         );

//         await attachStepScreenshot(
//           page,
//           '09 - Enter customer last name'
//         );
//       }
//     );

//     await test.step(
//       'Step 10: Enter customer postal code',
//       async () => {
//         await checkout.enterPostalCode(
//           data.postalCode
//         );

//         await attachStepScreenshot(
//           page,
//           '10 - Enter customer postal code'
//         );
//       }
//     );

//     await test.step(
//       'Step 11: Continue to order overview',
//       async () => {
//         await checkout.clickContinue();

//         await attachStepScreenshot(
//           page,
//           '11 - Continue to order overview'
//         );
//       }
//     );

//     await test.step(
//       'Step 12: Verify product on order overview',
//       async () => {
//         await expect(checkout.productName)
//           .toHaveText(data.productName);

//         await attachStepScreenshot(
//           page,
//           '12 - Verify product on order overview'
//         );
//       }
//     );

//     await test.step(
//       'Step 13: Finish and place the order',
//       async () => {
//         await checkout.clickFinish();

//         await attachStepScreenshot(
//           page,
//           '13 - Finish and place the order'
//         );
//       }
//     );

//     await test.step(
//       'Step 14: Verify order completion message',
//       async () => {
//         await expect(checkout.completeMessage)
//           .toHaveText(data.expectedCompleteMsg);

//         await attachStepScreenshot(
//           page,
//           '14 - Verify order completion message'
//         );
//       }
//     );

//     await test.step(
//       'Step 15: Open navigation menu',
//       async () => {
//         await logout.openMenu();

//         await attachStepScreenshot(
//           page,
//           '15 - Open navigation menu'
//         );
//       }
//     );

//     await test.step(
//       'Step 16: Logout from SauceDemo',
//       async () => {
//         await logout.logout();

//         await attachStepScreenshot(
//           page,
//           '16 - Logout from SauceDemo'
//         );
//       }
//     );

//     await test.step(
//       'Step 17: Verify user is successfully logged out',
//       async () => {
//         await expect(logout.loginButton)
//           .toBeVisible();

//         await attachStepScreenshot(
//           page,
//           '17 - Verify user is successfully logged out'
//         );
//       }
//     );


//   });
// });


import { test, expect } from '../fixtures/testSetup.js';
import smokeData from '../testdata/SmokeTest.json' assert { type: 'json' };

import LoginPage from '../pages/LoginPage.js';
import CheckOut from '../pages/CheckOut.js';
import Logout from '../pages/LogOut.js';

import { attachStepScreenshot } from '../utils/screenshotUtil.js';


test.describe('Smoke Suite', () => {

  test('Smoke Test - Complete Purchase Flow', async ({ page }) => {

    // ======================================================
    // PAGE OBJECTS
    // ======================================================

    const loginPage = new LoginPage(page);
    const checkout = new CheckOut(page);
    const logout = new Logout(page);


    // ======================================================
    // TEST DATA
    // ======================================================

    const data = smokeData.smokeTests[0];


    // ======================================================
    // STEP 01 - LOGIN
    // ======================================================

    await test.step(
      'Step 01: Enter credential and login',
      async () => {

        await loginPage.login(
          data.username,
          data.password
        );

        await attachStepScreenshot(
          page,
          '01 - Enter credential and login'
        );

      }
    );


    // ======================================================
    // STEP 02 - VERIFY LOGIN / LANDING PAGE
    // ======================================================

    await test.step(
      'Step 02: Verify user is successfully logged in',
      async () => {

        await expect(page.locator('.title'))
          .toHaveText('Products');

        await attachStepScreenshot(
          page,
          '02 - Verify Products page after login'
        );

      }
    );


    // ======================================================
    // STEP 03 - ADD PRODUCT TO CART
    // ======================================================

    await test.step(
      'Step 03: Add Sauce Labs Backpack to cart',
      async () => {

        await checkout.addProductToCart();

        await attachStepScreenshot(
          page,
          '03 - Add Sauce Labs Backpack to cart'
        );

      }
    );


    // ======================================================
    // STEP 04 - OPEN SHOPPING CART
    // ======================================================

    await test.step(
      'Step 04: Open shopping cart',
      async () => {

        await checkout.openCart();

        await attachStepScreenshot(
          page,
          '04 - Open shopping cart'
        );

      }
    );


    // ======================================================
    // STEP 05 - VERIFY PRODUCT IN CART
    // ======================================================

    await test.step(
      'Step 05: Verify Sauce Labs Backpack is present in cart',
      async () => {

        await expect(checkout.productName)
          .toHaveText(data.productName);

        await attachStepScreenshot(
          page,
          '05 - Verify Sauce Labs Backpack is present in cart'
        );

      }
    );


    // ======================================================
    // STEP 06 - PROCEED TO CHECKOUT
    // ======================================================

    await test.step(
      'Step 06: Proceed to checkout',
      async () => {

        await checkout.clickCheckout();

        await attachStepScreenshot(
          page,
          '06 - Proceed to checkout'
        );

      }
    );


    // ======================================================
    // STEP 07 - ENTER FIRST NAME
    // ======================================================

    await test.step(
      'Step 07: Enter customer first name',
      async () => {

        await checkout.enterFirstName(
          data.firstName
        );

        await attachStepScreenshot(
          page,
          '07 - Enter customer first name'
        );

      }
    );


    // ======================================================
    // STEP 08 - ENTER LAST NAME
    // ======================================================

    await test.step(
      'Step 08: Enter customer last name',
      async () => {

        await checkout.enterLastName(
          data.lastName
        );

        await attachStepScreenshot(
          page,
          '08 - Enter customer last name'
        );

      }
    );


    // ======================================================
    // STEP 09 - ENTER POSTAL CODE
    // ======================================================

    await test.step(
      'Step 09: Enter customer postal code',
      async () => {

        await checkout.enterPostalCode(
          data.postalCode
        );

        await attachStepScreenshot(
          page,
          '09 - Enter customer postal code'
        );

      }
    );


    // ======================================================
    // STEP 10 - CONTINUE TO ORDER OVERVIEW
    // ======================================================

    await test.step(
      'Step 10: Continue to order overview',
      async () => {

        await checkout.clickContinue();

        await attachStepScreenshot(
          page,
          '10 - Continue to order overview'
        );

      }
    );


    // ======================================================
    // STEP 11 - VERIFY PRODUCT ON ORDER OVERVIEW
    // ======================================================

    await test.step(
      'Step 11: Verify product on order overview',
      async () => {

        await expect(checkout.productName)
          .toHaveText(data.productName);

        await attachStepScreenshot(
          page,
          '11 - Verify product on order overview'
        );

      }
    );


    // ======================================================
    // STEP 12 - FINISH ORDER
    // ======================================================

    await test.step(
      'Step 12: Finish and place the order',
      async () => {

        await checkout.clickFinish();

        await attachStepScreenshot(
          page,
          '12 - Finish and place the order'
        );

      }
    );


    // ======================================================
    // STEP 13 - VERIFY ORDER COMPLETION
    // ======================================================

    await test.step(
      'Step 13: Verify order completion message',
      async () => {

        await expect(checkout.completeMessage)
          .toHaveText(data.expectedCompleteMsg);

        await attachStepScreenshot(
          page,
          '13 - Verify order completion message'
        );

      }
    );


    // ======================================================
    // STEP 14 - OPEN NAVIGATION MENU
    // ======================================================

    await test.step(
      'Step 14: Open navigation menu',
      async () => {

        await logout.openMenu();

        await attachStepScreenshot(
          page,
          '14 - Open navigation menu'
        );

      }
    );


    // ======================================================
    // STEP 15 - LOGOUT
    // ======================================================

    await test.step(
      'Step 15: Logout from SauceDemo',
      async () => {

        await logout.logout();

        await attachStepScreenshot(
          page,
          '15 - Logout from SauceDemo'
        );

      }
    );


    // ======================================================
    // STEP 16 - VERIFY LOGOUT
    // ======================================================

    await test.step(
      'Step 16: Verify user is successfully logged out',
      async () => {

        await expect(logout.loginButton)
          .toBeVisible();

        await attachStepScreenshot(
          page,
          '16 - Verify user is successfully logged out'
        );

      }
    );

  });

});

// HAMASRAFIQUE 123