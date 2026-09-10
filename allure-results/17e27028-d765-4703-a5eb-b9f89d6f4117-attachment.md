# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Logout.spec.js >> TC 1 - Login and Logout
- Location: tests\Logout.spec.js:14:5

# Error details

```
TypeError: login.gotoURL is not a function
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import logoutData from '../testdata/LogOut.json';
  4  | 
  5  | import LoginPage from '../pages/LoginPage';
  6  | 
  7  | import LogOut from '../pages/LogOut';
  8  | 
  9  | 
  10 | // ======================================================
  11 | // TC 1 - LOGIN AND LOGOUT
  12 | // ======================================================
  13 | 
  14 | test('TC 1 - Login and Logout', async ({ page }) => {
  15 | 
  16 |   const login = new LoginPage(page);
  17 | 
  18 |   const logout = new LogOut(page);
  19 | 
  20 |   // Selecting first dataset from JSON
  21 |   const data = logoutData.logoutTests[0];
  22 | 
  23 | 
  24 |   // ======================================================
  25 |   // LOGIN
  26 |   // ======================================================
  27 | 
> 28 |   await login.gotoURL();
     |               ^ TypeError: login.gotoURL is not a function
  29 | 
  30 |   await login.login(
  31 |     data.username,
  32 |     data.password
  33 |   );
  34 | 
  35 | 
  36 |   // Verify Login
  37 |   await expect(login.message.first()).toHaveText(data.expectedMsg);
  38 | 
  39 | 
  40 |   // ======================================================
  41 |   // OPEN MENU
  42 |   // ======================================================
  43 | 
  44 |   await logout.openMenu();
  45 | 
  46 | 
  47 |   // ======================================================
  48 |   // LOGOUT
  49 |   // ======================================================
  50 | 
  51 |   await logout.logout();
  52 | 
  53 | 
  54 |   // ======================================================
  55 |   // VERIFY LOGOUT
  56 |   // ======================================================
  57 | 
  58 |   await expect(logout.loginButton).toBeVisible();
  59 | 
  60 | });
```