# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\CheckOut.spec.js >> TC 1 - Login and Checkout Product
- Location: tests\CheckOut.spec.js:14:5

# Error details

```
TypeError: login.gotoURL is not a function
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | import checkoutData from '../testdata/CheckOut.json';
  4   | 
  5   | import LoginPage from '../pages/LoginPage';
  6   | 
  7   | import CheckOut from '../pages/CheckOut';
  8   | 
  9   | 
  10  | // ======================================================
  11  | // TC 1 - LOGIN AND CHECKOUT PRODUCT
  12  | // ======================================================
  13  | 
  14  | test('TC 1 - Login and Checkout Product', async ({ page }) => {
  15  | 
  16  |   const login = new LoginPage(page);
  17  | 
  18  |   const checkout = new CheckOut(page);
  19  | 
  20  |   // Selecting first dataset from JSON
  21  |   const data = checkoutData.checkoutTests[0];
  22  | 
  23  | 
  24  |   // ======================================================
  25  |   // LOGIN
  26  |   // ======================================================
  27  | 
> 28  |   await login.gotoURL();
      |               ^ TypeError: login.gotoURL is not a function
  29  | 
  30  |   await login.login(
  31  |     data.username,
  32  |     data.password
  33  |   );
  34  | 
  35  | 
  36  |   // Verify Login
  37  |   await expect(login.message.first()).toHaveText('Swag Labs');
  38  | 
  39  | 
  40  |   // ======================================================
  41  |   // ADD PRODUCT TO CART
  42  |   // ======================================================
  43  | 
  44  |   await checkout.addProductToCart();
  45  | 
  46  | 
  47  |   // ======================================================
  48  |   // OPEN CART
  49  |   // ======================================================
  50  | 
  51  |   await checkout.openCart();
  52  | 
  53  | 
  54  |   // Verify Product
  55  |   await expect(checkout.productName).toHaveText(data.productName);
  56  | 
  57  | 
  58  |   // ======================================================
  59  |   // CHECKOUT
  60  |   // ======================================================
  61  | 
  62  |   await checkout.clickCheckout();
  63  | 
  64  | 
  65  |   // ======================================================
  66  |   // ENTER CUSTOMER INFORMATION
  67  |   // ======================================================
  68  | 
  69  |   await checkout.enterFirstName(data.firstName);
  70  | 
  71  |   await checkout.enterLastName(data.lastName);
  72  | 
  73  |   await checkout.enterPostalCode(data.postalCode);
  74  | 
  75  | 
  76  |   // ======================================================
  77  |   // CONTINUE
  78  |   // ======================================================
  79  | 
  80  |   await checkout.clickContinue();
  81  | 
  82  | 
  83  |   // Verify Product on Overview
  84  |   await expect(checkout.productName).toHaveText(data.productName);
  85  | 
  86  | 
  87  |   // ======================================================
  88  |   // FINISH ORDER
  89  |   // ======================================================
  90  | 
  91  |   await checkout.clickFinish();
  92  | 
  93  | 
  94  |   // ======================================================
  95  |   // VERIFY ORDER COMPLETED
  96  |   // ======================================================
  97  | 
  98  |   await expect(checkout.completeMessage).toHaveText(data.expectedMsg);
  99  | 
  100 | });
```