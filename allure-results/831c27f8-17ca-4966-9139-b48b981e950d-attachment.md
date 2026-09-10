# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\AddToCart.spec.js >> TC 1 - Login and Add Product to Cart
- Location: tests\AddToCart.spec.js:10:5

# Error details

```
TypeError: login.gotoURL is not a function
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import addToCartData from '../testdata/AddToCart.json';
  4  | 
  5  | import LoginPage from '../pages/LoginPage';
  6  | 
  7  | import AddToCart from '../pages/AddToCart';
  8  | 
  9  | 
  10 | test('TC 1 - Login and Add Product to Cart', async ({ page }) => {
  11 | 
  12 |   const login = new LoginPage(page);
  13 | 
  14 |   const cart = new AddToCart(page);
  15 | 
  16 |   const data = addToCartData.addToCartTests[0];
  17 | 
  18 | 
  19 |   // LOGIN
> 20 |   await login.gotoURL();
     |               ^ TypeError: login.gotoURL is not a function
  21 | 
  22 |   await login.login(
  23 |     data.username,
  24 |     data.password
  25 |   );
  26 | 
  27 | 
  28 |     // Verify Login
  29 |     await expect(login.message.first()).toHaveText('Swag Labs');
  30 | 
  31 | 
  32 |     // Open Backpack
  33 |     await cart.openProduct(cart.shirt);
  34 | 
  35 |     // Add Backpack to Cart
  36 |     await cart.addProduct(cart.addToCartButton);
  37 | 
  38 |     // Verify Cart Badge
  39 |     await expect(cart.cartBadge).toHaveText(data.expectedMsg);
  40 | 
  41 |     // Open Cart
  42 |     await cart.openCart();
  43 | 
  44 |     // Verify Product
  45 |     await expect(cart.productName).toHaveText(data.productName[2]);
  46 | 
  47 | });
```