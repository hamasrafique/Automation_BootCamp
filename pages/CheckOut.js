import { test } from '@playwright/test';

class CheckOut {

  constructor(page) {

    this.page = page;


    // ======================================================
    // ADD PRODUCT
    // ======================================================

    this.addProduct = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );


    // ======================================================
    // CART
    // ======================================================

    this.cart = page.locator('.shopping_cart_link');

    this.cartBadge = page.locator(
      '.shopping_cart_badge'
    );


    // ======================================================
    // CHECKOUT
    // ======================================================

    this.checkoutButton = page.locator('#checkout');


    // ======================================================
    // CUSTOMER INFORMATION
    // ======================================================

    this.firstName = page.locator('#first-name');

    this.lastName = page.locator('#last-name');

    this.postalCode = page.locator('#postal-code');


    // ======================================================
    // CONTINUE
    // ======================================================

    this.continueButton = page.locator('#continue');


    // ======================================================
    // PRODUCT
    // ======================================================

    this.productName = page.locator(
      '.inventory_item_name'
    );


    // ======================================================
    // FINISH
    // ======================================================

    this.finishButton = page.locator('#finish');


    // ======================================================
    // COMPLETE MESSAGE
    // ======================================================

    this.completeMessage = page.locator(
      '.complete-header'
    );

  }


  // ======================================================
  // SCREENSHOT METHOD
  // ======================================================

  async attachScreenshot(name) {

    await test.info().attach(name, {
      body: await this.page.screenshot(),
      contentType: 'image/png',
    });

  }


  // ======================================================
  // ADD PRODUCT TO CART
  // ======================================================

  async addProductToCart() {

    await this.addProduct.click();

    await this.attachScreenshot(
      '05 - Product Added To Cart'
    );

  }


  // ======================================================
  // OPEN CART
  // ======================================================

  async openCart() {

    await this.cart.click();

    await this.attachScreenshot(
      '06 - Shopping Cart Opened'
    );

  }


  // ======================================================
  // CHECKOUT
  // ======================================================

  async clickCheckout() {

    await this.checkoutButton.click();

    await this.attachScreenshot(
      '07 - Checkout Page Opened'
    );

  }


  // ======================================================
  // FIRST NAME
  // ======================================================

  async enterFirstName(firstName) {

    await this.firstName.fill(firstName);

    await this.attachScreenshot(
      '08 - First Name Entered'
    );

  }


  // ======================================================
  // LAST NAME
  // ======================================================

  async enterLastName(lastName) {

    await this.lastName.fill(lastName);

    await this.attachScreenshot(
      '09 - Last Name Entered'
    );

  }


  // ======================================================
  // POSTAL CODE
  // ======================================================

  async enterPostalCode(postalCode) {

    await this.postalCode.fill(postalCode);

    await this.attachScreenshot(
      '10 - Postal Code Entered'
    );

  }


  // ======================================================
  // CONTINUE
  // ======================================================

  async clickContinue() {

    await this.continueButton.click();

    await this.attachScreenshot(
      '11 - Order Overview'
    );

  }


  // ======================================================
  // FINISH ORDER
  // ======================================================

  async clickFinish() {

    await this.finishButton.click();

    await this.attachScreenshot(
      '12 - Order Completed'
    );

  }

}

export default CheckOut;
