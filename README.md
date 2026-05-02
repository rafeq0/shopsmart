# ShopSmart - E-commerce Sprint Project

ShopSmart is a frontend-only mini e-commerce project built to simulate a Scrum sprint workflow using Git and GitHub practices.

## Sprint Goal
Deliver a simple but complete static shopping flow with:
- user registration
- product browsing
- basic cart interactions

## User Stories (Jira)
- `SS-3`: User Registration  
  Jira: https://rafeqabas.atlassian.net/browse/SS-3
- `SS-4`: Product Browsing  
  Jira: https://rafeqabas.atlassian.net/browse/SS-4
- `SS-5`: Shopping Cart  
  Jira: https://rafeqabas.atlassian.net/browse/SS-5

## Branching Strategy
This repository follows a Scrum-friendly Git model:
- `main`: production-ready branch
- `develop`: integration branch for sprint work
- `feature/SS-1-register` (implements Jira `SS-3`)
- `feature/SS-2-catalog` (implements Jira `SS-4`)
- `feature/SS-3-cart` (implements Jira `SS-5`)

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
- `SS-3`: Registration form with required-field validation and confirmation message.
- `SS-4`: Static product catalog rendered as responsive product cards.
- `SS-5`: Add-to-cart behavior using `localStorage`, with cart item count and cart page display.

## CI
A basic GitHub Actions workflow is included at `.github/workflows/ci.yml` to validate required static files on pushes and pull requests.

## Screenshots (Placeholders)
- Home page: `docs/screenshots/home.png`
- Registration page: `docs/screenshots/register.png`
- Products page: `docs/screenshots/products.png`
- Cart page: `docs/screenshots/cart.png`

## Sprint Closure Artifacts
- docs/sprint-summary.md
- docs/retrospective.md


## Compliance Checklist
- docs/compliance-checklist.md
- .github/pull_request_template.md

