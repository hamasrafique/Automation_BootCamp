class AddToCart {

  constructor(page) {

    this.page = page;

    // Product
    this.bagpack = page.locator("[data-test='item-4-title-link']");
    this.bikelight = page.locator("[data-test='item-0-title-link']");
    this.shirt = page.locator("[data-test='item-1-title-link']");
    this.jacket = page.locator("[data-test='item-5-title-link']");



    // Add to Cart button on Product Detail Page
    this.addToCartButton = page.locator("[data-test='add-to-cart']");

    // Cart
    this.cart = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');

    // Product name inside cart
    this.productName = page.locator('.inventory_item_name');
  }

  async openProduct(value) {
    await value.click();
  }

  async addProduct(value) {
    await value.click();
  }

  async openCart() {
    await this.cart.click();
  }
}

export default AddToCart;