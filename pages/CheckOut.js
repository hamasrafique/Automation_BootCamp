class CheckOut {

  constructor(page) {

    this.page = page;

    // Add Product
    this.addProduct = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    // Cart
    this.cart = page.locator('.shopping_cart_link');

    // Checkout
    this.checkoutButton = page.locator('#checkout');

    // Checkout Information
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');

    // Continue
    this.continueButton = page.locator('#continue');

    // Product
    this.productName = page.locator('.inventory_item_name');

    // Finish
    this.finishButton = page.locator('#finish');

    // Complete Message
    this.completeMessage = page.locator('.complete-header');
  }


  async addProductToCart() {
    await this.addProduct.click();
  }


  async openCart() {
    await this.cart.click();
  }


  async clickCheckout() {
    await this.checkoutButton.click();
  }


  async enterFirstName(firstName) {
    await this.firstName.fill(firstName);
  }


  async enterLastName(lastName) {
    await this.lastName.fill(lastName);
  }


  async enterPostalCode(postalCode) {
    await this.postalCode.fill(postalCode);
  }


  async clickContinue() {
    await this.continueButton.click();
  }


  async clickFinish() {
    await this.finishButton.click();
  }

}

export default CheckOut;