import { test, expect } from '@playwright/test';

import checkoutData from '../testdata/CheckOut.json';

import LoginPage from '../pages/LoginPage';

import CheckOut from '../pages/CheckOut';


// ======================================================
// TC 1 - LOGIN AND CHECKOUT PRODUCT
// ======================================================

test('TC 1 - Login and Checkout Product', async ({ page }) => {

  const login = new LoginPage(page);

  const checkout = new CheckOut(page);

  // Selecting first dataset from JSON
  const data = checkoutData.checkoutTests[0];


  // ======================================================
  // LOGIN
  // ======================================================

  await login.gotoURL();

  await login.login(
    data.username,
    data.password
  );


  // Verify Login
  await expect(login.message.first()).toHaveText('Swag Labs');


  // ======================================================
  // ADD PRODUCT TO CART
  // ======================================================

  await checkout.addProductToCart();


  // ======================================================
  // OPEN CART
  // ======================================================

  await checkout.openCart();


  // Verify Product
  await expect(checkout.productName).toHaveText(data.productName);


  // ======================================================
  // CHECKOUT
  // ======================================================

  await checkout.clickCheckout();


  // ======================================================
  // ENTER CUSTOMER INFORMATION
  // ======================================================

  await checkout.enterFirstName(data.firstName);

  await checkout.enterLastName(data.lastName);

  await checkout.enterPostalCode(data.postalCode);


  // ======================================================
  // CONTINUE
  // ======================================================

  await checkout.clickContinue();


  // Verify Product on Overview
  await expect(checkout.productName).toHaveText(data.productName);


  // ======================================================
  // FINISH ORDER
  // ======================================================

  await checkout.clickFinish();


  // ======================================================
  // VERIFY ORDER COMPLETED
  // ======================================================

  await expect(checkout.completeMessage).toHaveText(data.expectedMsg);

});