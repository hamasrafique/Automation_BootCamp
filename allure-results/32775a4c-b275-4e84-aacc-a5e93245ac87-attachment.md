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

Locator: locator('.app_logo').first()
Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - button [ref=e18] [cursor=pointer]: Close Menu
        - generic [ref=e20]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Sauce Labs Backpack" [ref=e40] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e42]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e43]:
            - generic [ref=e44]: $29.99
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Bike Light" [ref=e52] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e55]:
            - generic [ref=e56]: $9.99
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e67]:
            - generic [ref=e68]: $15.99
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Sauce Labs Fleece Jacket" [ref=e76] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $49.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e91]:
            - generic [ref=e92]: $7.99
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e103]:
            - generic [ref=e104]: $15.99
            - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
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
  578 |     // SmokeTest.json contains:
  579 |     // {
  580 |     //   "smokeTests": [
  581 |     //      { ...test data... }
  582 |     //   ]
  583 |     // }
  584 |     //
  585 |     // So we access the first object from the array.
  586 | 
  587 |     const data = smokeData.smokeTests[0];
  588 | 
  589 | 
  590 |     // ======================================================
  591 |     // STEP 01 - LOGIN
  592 |     // ======================================================
  593 | 
  594 |     await test.step(
  595 |       'Step 01: Enter credential and login',
  596 |       async () => {
  597 | 
  598 |         await loginPage.login(
  599 |           data.username,
  600 |           data.password
  601 |         );
  602 | 
  603 |         await attachStepScreenshot(
  604 |           page,
  605 |           '01 - Enter credential and login'
  606 |         );
  607 | 
  608 |       }
  609 |     );
  610 | 
  611 | 
  612 |     // ======================================================
  613 |     // STEP 02 - VERIFY LOGIN
  614 |     // ======================================================
  615 | 
  616 |     await test.step(
  617 |       'Step 02: Verify Welcome Message on Landing page',
  618 |       async () => {
  619 | 
  620 |         await expect(loginPage.message.first())
> 621 |           .toHaveText(data.ExpectedMsg);
      |            ^ Error: expect(locator).toHaveText(expected) failed
  622 | 
  623 |         await attachStepScreenshot(
  624 |           page,
  625 |           '02 - Verify Welcome Message on Landing page'
  626 |         );
  627 | 
  628 |       }
  629 |     );
  630 | 
  631 | 
  632 |     // ======================================================
  633 |     // STEP 03 - ADD PRODUCT TO CART
  634 |     // ======================================================
  635 | 
  636 |     await test.step(
  637 |       'Step 03: Add Sauce Labs Backpack to cart',
  638 |       async () => {
  639 | 
  640 |         await checkout.addProductToCart();
  641 | 
  642 |         await attachStepScreenshot(
  643 |           page,
  644 |           '03 - Add Sauce Labs Backpack to cart'
  645 |         );
  646 | 
  647 |       }
  648 |     );
  649 | 
  650 | 
  651 |     // ======================================================
  652 |     // STEP 04 - OPEN SHOPPING CART
  653 |     // ======================================================
  654 | 
  655 |     await test.step(
  656 |       'Step 04: Open shopping cart',
  657 |       async () => {
  658 | 
  659 |         await checkout.openCart();
  660 | 
  661 |         await attachStepScreenshot(
  662 |           page,
  663 |           '04 - Open shopping cart'
  664 |         );
  665 | 
  666 |       }
  667 |     );
  668 | 
  669 | 
  670 |     // ======================================================
  671 |     // STEP 05 - VERIFY PRODUCT IN CART
  672 |     // ======================================================
  673 | 
  674 |     await test.step(
  675 |       'Step 05: Verify Sauce Labs Backpack is present in cart',
  676 |       async () => {
  677 | 
  678 |         await expect(checkout.productName)
  679 |           .toHaveText(data.productName);
  680 | 
  681 |         await attachStepScreenshot(
  682 |           page,
  683 |           '05 - Verify Sauce Labs Backpack is present in cart'
  684 |         );
  685 | 
  686 |       }
  687 |     );
  688 | 
  689 | 
  690 |     // ======================================================
  691 |     // STEP 06 - PROCEED TO CHECKOUT
  692 |     // ======================================================
  693 | 
  694 |     await test.step(
  695 |       'Step 06: Proceed to checkout',
  696 |       async () => {
  697 | 
  698 |         await checkout.clickCheckout();
  699 | 
  700 |         await attachStepScreenshot(
  701 |           page,
  702 |           '06 - Proceed to checkout'
  703 |         );
  704 | 
  705 |       }
  706 |     );
  707 | 
  708 | 
  709 |     // ======================================================
  710 |     // STEP 07 - ENTER FIRST NAME
  711 |     // ======================================================
  712 | 
  713 |     await test.step(
  714 |       'Step 07: Enter customer first name',
  715 |       async () => {
  716 | 
  717 |         await checkout.enterFirstName(
  718 |           data.firstName
  719 |         );
  720 | 
  721 |         await attachStepScreenshot(
```