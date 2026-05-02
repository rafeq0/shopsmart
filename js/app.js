const APP_STORAGE_KEY = "shopsmart_cart";

function loadCart() {
  return JSON.parse(localStorage.getItem(APP_STORAGE_KEY) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(cart));
}
