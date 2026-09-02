# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SmokeTest\SmokeTest.spec.js >> Smoke Suite >> Smoke Test - Complete Purchase Flow
- Location: SmokeTest\SmokeTest.spec.js:568:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.app_logo').first()
Expected: "Products"
Received: "Swag Labs"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.app_logo').first()
    14 × locator resolved to <div class="app_logo">Swag Labs</div>
       - unexpected value "Swag Labs"

```

```yaml
- text: Swag Labs
```

# Test source

```ts
  517 | //         await logout.openMenu();
  518 | 
  519 | //         await attachStepScreenshot(
  520 | //           page,
  521 | //           '15 - Open navigation menu'
  522 | //         );
  523 | //       }
  524 | //     );
  525 | 
  526 | //     await test.step(
  527 | //       'Step 16: Logout from SauceDemo',
  528 | //       async () => {
  529 | //         await logout.logout();
  530 | 
  531 | //         await attachStepScreenshot(
  532 | //           page,
  533 | //           '16 - Logout from SauceDemo'
  534 | //         );
  535 | //       }
  536 | //     );
  537 | 
  538 | //     await test.step(
  539 | //       'Step 17: Verify user is successfully logged out',
  540 | //       async () => {
  541 | //         await expect(logout.loginButton)
  542 | //           .toBeVisible();
  543 | 
  544 | //         await attachStepScreenshot(
  545 | //           page,
  546 | //           '17 - Verify user is successfully logged out'
  547 | //         );
  548 | //       }
  549 | //     );
  550 | 
  551 | 
  552 | //   });
  553 | // });
  554 | 
  555 | 
  556 | import { test, expect } from '../fixtures/testSetup.js';
  557 | import smokeData from '../testdata/SmokeTest.json' assert { type: 'json' };
  558 | 
  559 | import LoginPage from '../pages/LoginPage.js';
  560 | import CheckOut from '../pages/CheckOut.js';
  561 | import Logout from '../pages/LogOut.js';
  562 | 
  563 | import { attachStepScreenshot } from '../utils/screenshotUtil.js';
  564 | 
  565 | 
  566 | test.describe('Smoke Suite', () => {
  567 | 
  568 |   test('Smoke Test - Complete Purchase Flow', async ({ page }) => {
  569 | 
  570 |     // ======================================================
  571 |     // PAGE OBJECTS
  572 |     // ======================================================
  573 | 
  574 |     const loginPage = new LoginPage(page);
  575 |     const checkout = new CheckOut(page);
  576 |     const logout = new Logout(page);
  577 | 
  578 | 
  579 |     // ======================================================
  580 |     // TEST DATA
  581 |     // ======================================================
  582 | 
  583 |     const data = smokeData.smokeTests[0];
  584 | 
  585 | 
  586 |     // ======================================================
  587 |     // STEP 01 - LOGIN
  588 |     // ======================================================
  589 | 
  590 |     await test.step(
  591 |       'Step 01: Enter credential and login',
  592 |       async () => {
  593 | 
  594 |         await loginPage.login(
  595 |           data.username,
  596 |           data.password
  597 |         );
  598 | 
  599 |         await attachStepScreenshot(
  600 |           page,
  601 |           '01 - Enter credential and login'
  602 |         );
  603 | 
  604 |       }
  605 |     );
  606 | 
  607 | 
  608 |     // ======================================================
  609 |     // STEP 02 - VERIFY LOGIN
  610 |     // ======================================================
  611 | 
  612 |     await test.step(
  613 |       'Step 02: Verify Welcome Message on Landing page',
  614 |       async () => {
  615 | 
  616 |         await expect(loginPage.message.first())
> 617 |           .toHaveText('Products');
      |            ^ Error: expect(locator).toHaveText(expected) failed
  618 | 
  619 |         await attachStepScreenshot(
  620 |           page,
  621 |           '02 - Verify Welcome Message on Landing page'
  622 |         );
  623 | 
  624 |       }
  625 |     );
  626 | 
  627 | 
  628 |     // ======================================================
  629 |     // STEP 03 - ADD PRODUCT
  630 |     // ======================================================
  631 | 
  632 |     await test.step(
  633 |       'Step 03: Add Sauce Labs Backpack to cart',
  634 |       async () => {
  635 | 
  636 |         await checkout.addProductToCart();
  637 | 
  638 |         await attachStepScreenshot(
  639 |           page,
  640 |           '03 - Add Sauce Labs Backpack to cart'
  641 |         );
  642 | 
  643 |       }
  644 |     );
  645 | 
  646 | 
  647 |     // ======================================================
  648 |     // STEP 04 - OPEN CART
  649 |     // ======================================================
  650 | 
  651 |     await test.step(
  652 |       'Step 04: Open shopping cart',
  653 |       async () => {
  654 | 
  655 |         await checkout.openCart();
  656 | 
  657 |         await attachStepScreenshot(
  658 |           page,
  659 |           '04 - Open shopping cart'
  660 |         );
  661 | 
  662 |       }
  663 |     );
  664 | 
  665 | 
  666 |     // ======================================================
  667 |     // STEP 05 - VERIFY PRODUCT IN CART
  668 |     // ======================================================
  669 | 
  670 |     await test.step(
  671 |       'Step 05: Verify Sauce Labs Backpack is present in cart',
  672 |       async () => {
  673 | 
  674 |         await expect(checkout.productName)
  675 |           .toHaveText(data.productName);
  676 | 
  677 |         await attachStepScreenshot(
  678 |           page,
  679 |           '05 - Verify Sauce Labs Backpack is present in cart'
  680 |         );
  681 | 
  682 |       }
  683 |     );
  684 | 
  685 | 
  686 |     // ======================================================
  687 |     // STEP 06 - PROCEED TO CHECKOUT
  688 |     // ======================================================
  689 | 
  690 |     await test.step(
  691 |       'Step 06: Proceed to checkout',
  692 |       async () => {
  693 | 
  694 |         await checkout.clickCheckout();
  695 | 
  696 |         await attachStepScreenshot(
  697 |           page,
  698 |           '06 - Proceed to checkout'
  699 |         );
  700 | 
  701 |       }
  702 |     );
  703 | 
  704 | 
  705 |     // ======================================================
  706 |     // STEP 07 - FIRST NAME
  707 |     // ======================================================
  708 | 
  709 |     await test.step(
  710 |       'Step 07: Enter customer first name',
  711 |       async () => {
  712 | 
  713 |         await checkout.enterFirstName(
  714 |           data.firstName
  715 |         );
  716 | 
  717 |         await attachStepScreenshot(
```