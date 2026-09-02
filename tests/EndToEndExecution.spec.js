// @ts-check
import { test, expect } from '@playwright/test';
 
test('End To End Execution TestCase', async ({ page }) => {
  // to open website
    await page.goto('https://saucedemo.com/');
 
    //to enter username first locator then what will be entered
  await page.fill('#user-name','standard_user');
  // to enter password first locator then what will be entered
  await page.fill('#password','secret_sauce');
 
  // to click button give action and only id
  await page.click('#login-button');
 
  // for verification that loginng in successfully and right page is opening or not
  await expect(page.locator('.app_logo')).toHaveText("Swag Labs");
 
  await page.getByText('Sauce Labs Backpack').click();
 
  await page.getByText('Add to cart').click();
 
  await page.click('#shopping_cart_container');
 
  await page.click('.checkout_button');
 
  await page.fill('#first-name','standard_user');
 
  await page.fill('#last-name','secret_sauce');
 
  await page.fill('#postal-code','12345');
 
  await page.click('#continue');
 
  await page.click('#finish');
 
  await expect(page.locator('.complete-header')).toContainText("Thank you for your order!");
});