const APP_STORAGE_KEY = "shopsmart_cart";

function loadCart() {
  return JSON.parse(localStorage.getItem(APP_STORAGE_KEY) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(cart));
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

setupRegistration();
