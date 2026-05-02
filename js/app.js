const APP_STORAGE_KEY = "shopsmart_cart";
const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 59.99 },
  { id: 2, name: "Smart Watch", price: 89.99 },
  { id: 3, name: "Bluetooth Speaker", price: 39.99 },
  { id: 4, name: "Portable Charger", price: 24.99 }
];

function loadCart() {
  return JSON.parse(localStorage.getItem(APP_STORAGE_KEY) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(cart));
}

function updateCartCount() {
  const countElements = document.querySelectorAll("#cart-count");
  const cart = loadCart();
  countElements.forEach((el) => {
    el.textContent = String(cart.length);
  });
}

function setupRegistration() {
  const form = document.getElementById("register-form");
  const message = document.getElementById("register-message");

  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (!name || !email || !password) {
      message.textContent = "Please fill in all required fields.";
      message.style.color = "#b91c1c";
      return;
    }

    message.textContent = "Registration successful. Welcome to ShopSmart!";
    message.style.color = "#166534";
    form.reset();
  });
}

function addToCart(productId) {
  const selected = PRODUCTS.find((product) => product.id === productId);
  if (!selected) return;
  const cart = loadCart();
  cart.push(selected);
  saveCart(cart);
  updateCartCount();
}

function setupProductCatalog() {
  const list = document.getElementById("product-list");
  if (!list) return;

  list.innerHTML = PRODUCTS.map((product) => `
    <article class="card">
      <div class="placeholder-image">Image Placeholder</div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
    </article>
  `).join("");

  list.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.getAttribute("data-id")));
    });
  });
}

function clearCart() {`r`n  saveCart([]);`r`n  updateCartCount();`r`n  setupCartPage();`r`n}`r`n`r`nfunction setupCartPage() {
  const itemsContainer = document.getElementById("cart-items");
  const totalItems = document.getElementById("total-items");
  if (!itemsContainer || !totalItems) return;

  const cart = loadCart();
  totalItems.textContent = String(cart.length);

  if (!cart.length) {
    itemsContainer.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  itemsContainer.innerHTML = cart`r`n    .map((item) => `<li>${item.name} - ${item.price.toFixed(2)}</li>`)`r`n    .join("");`r`n`r`n  const clearBtn = document.getElementById("clear-cart");`r`n  if (clearBtn) {`r`n    clearBtn.onclick = clearCart;`r`n  }
}

setupRegistration();
setupProductCatalog();
setupCartPage();
updateCartCount();

