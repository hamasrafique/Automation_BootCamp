import { test, expect } from '@playwright/test';

import smokeData from '../testdata/SmokeTest.json';

import LoginPage from '../pages/LoginPage';

import CheckOut from '../pages/CheckOut';

import Logout from '../pages/LogOut';


test('SMOKE TEST - Login → Add to Cart → Checkout → Logout', async ({ page }) => {

  const login = new LoginPage(page);

  const checkout = new CheckOut(page);

  const logout = new Logout(page);

  const data = smokeData.smokeTests[0];


  // ======================================================
  // 1. LOGIN
  // ======================================================

  await login.gotoURL();

  await login.login(
    data.username,
    data.password
  );


  // Verify Login
  await expect(login.message.first())
    .toHaveText('Swag Labs');


  // ======================================================
  // 2. ADD PRODUCT TO CART
  // ======================================================

  await checkout.addProductToCart();


  // ======================================================
  // 3. OPEN CART
  // ======================================================

  await checkout.openCart();


  // Verify Product
  await expect(checkout.productName).toHaveText(data.productName);


  // ======================================================
  // 4. CHECKOUT
  // ======================================================

  await checkout.clickCheckout();


  // ======================================================
  // 5. CUSTOMER INFORMATION
  // ======================================================

  await checkout.enterFirstName(data.firstName);

  await checkout.enterLastName(data.lastName);

  await checkout.enterPostalCode(data.postalCode);


  // ======================================================
  // 6. CONTINUE
  // ======================================================

  await checkout.clickContinue();


  // Verify Product on Overview
  await expect(checkout.productName)
    .toHaveText(data.productName);


  // ======================================================
  // 7. FINISH ORDER
  // ======================================================

  await checkout.clickFinish();


  // Verify Order Completed
  await expect(checkout.completeMessage)
    .toHaveText(data.expectedCompleteMsg);


  // ======================================================
  // 8. LOGOUT
  // ======================================================

  await logout.openMenu();

  await logout.logout();


  // ======================================================
  // 9. VERIFY LOGOUT
  // ======================================================

  await expect(logout.loginButton).toBeVisible();

});