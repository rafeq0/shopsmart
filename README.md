# ShopSmart - E-commerce Sprint Project

ShopSmart is a frontend-only mini e-commerce project built to simulate a Scrum sprint workflow using Git and GitHub practices.

## Sprint Goal
Deliver a simple but complete static shopping flow with:
- user registration
- product browsing
- basic cart interactions

## User Stories
- `SS-1`: User Registration
- `SS-2`: Product Browsing
- `SS-3`: Shopping Cart

## Branching Strategy
This repository follows a Scrum-friendly Git model:
- `main`: production-ready branch
- `develop`: integration branch for sprint work
- `feature/SS-1-register`
- `feature/SS-2-catalog`
- `feature/SS-3-cart`

## Project Structure
```text
shopsmart/
??? index.html
??? css/
?   ??? style.css
??? js/
?   ??? app.js
??? pages/
?   ??? register.html
?   ??? products.html
?   ??? cart.html
??? README.md
```

## How to Run
1. Clone the repository.
2. Open `index.html` in your browser.
3. Navigate between `Register`, `Products`, and `Cart` pages.

## Sprint Implementation Notes
- `SS-1`: Registration form with required-field validation and confirmation message.
- `SS-2`: Static product catalog rendered as responsive product cards.
- `SS-3`: Add-to-cart behavior using `localStorage`, with cart item count and cart page display.

## CI
A basic GitHub Actions workflow is included at `.github/workflows/ci.yml` to validate required static files on pushes and pull requests.

## Screenshots (Placeholders)
- Home page: `docs/screenshots/home.png`
- Registration page: `docs/screenshots/register.png`
- Products page: `docs/screenshots/products.png`
- Cart page: `docs/screenshots/cart.png`
