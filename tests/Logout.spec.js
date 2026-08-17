import { test, expect } from '@playwright/test';

import logoutData from '../testdata/LogOut.json';

import LoginPage from '../pages/LoginPage';

import LogOut from '../pages/LogOut';


// ======================================================
// TC 1 - LOGIN AND LOGOUT
// ======================================================

test('TC 1 - Login and Logout', async ({ page }) => {

  const login = new LoginPage(page);

  const logout = new LogOut(page);

  // Selecting first dataset from JSON
  const data = logoutData.logoutTests[0];


  // ======================================================
  // LOGIN
  // ======================================================

  await login.gotoURL();

  await login.login(
    data.username,
    data.password
  );


  // Verify Login
  await expect(login.message.first()).toHaveText(data.expectedMsg);


  // ======================================================
  // OPEN MENU
  // ======================================================

  await logout.openMenu();


  // ======================================================
  // LOGOUT
  // ======================================================

  await logout.logout();


  // ======================================================
  // VERIFY LOGOUT
  // ======================================================

  await expect(logout.loginButton).toBeVisible();

});