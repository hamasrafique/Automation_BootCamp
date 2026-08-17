import { test, expect } from '@playwright/test';

import addToCartData from '../testdata/AddToCart.json';

import LoginPage from '../pages/LoginPage';

import AddToCart from '../pages/AddToCart';


test('TC 1 - Login and Add Product to Cart', async ({ page }) => {

  const login = new LoginPage(page);

  const cart = new AddToCart(page);

  const data = addToCartData.addToCartTests[0];


  // LOGIN
  await login.gotoURL();

  await login.login(
    data.username,
    data.password
  );


    // Verify Login
    await expect(login.message.first()).toHaveText('Swag Labs');


    // Open Backpack
    await cart.openProduct(cart.shirt);

    // Add Backpack to Cart
    await cart.addProduct(cart.addToCartButton);

    // Verify Cart Badge
    await expect(cart.cartBadge).toHaveText(data.expectedMsg);

    // Open Cart
    await cart.openCart();

    // Verify Product
    await expect(cart.productName).toHaveText(data.productName[2]);

});