# Zaafree

Zaafree is a modern frontend e-commerce storefront built with React, Vite, React Router, and Tailwind CSS. The project focuses on creating an app-like shopping experience with category browsing, product discovery, search, cart management, account pages, and marketplace-style product presentation.

This project is currently a frontend demo/prototype. It uses generated product data and `localStorage` for cart and user persistence, so there is no real backend, payment gateway, or order management API yet.

## Overview

Zaafree simulates a multi-category online shopping platform with a clean and responsive interface. Users can explore 50 categories, browse 200 generated products, open individual product detail pages, search across the catalog, add products to the cart, and move through sign-in, sign-up, profile, and orders screens.

The application is structured like a single-page storefront where routing, state management, and reusable UI components work together to make the demo feel close to a real commerce application. Instead of relying on a server, the app keeps data on the client side and persists the cart and signed-in user in the browser.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based UI rendering |
| React Router DOM 7 | Client-side routing for pages and navigation |
| Vite 8 | Development server and production bundling |
| Tailwind CSS 4 | Utility-first styling and responsive design |
| ESLint 9 | Linting and code quality checks |
| Browser `localStorage` | Persisting cart and mock user session |

## Project Structure

```text
zenv/
|-- src/
|   |-- components/
|   |   |-- Footer/             # Footer layout and informational links
|   |   |-- Header/             # Top navigation, search bar, auth/cart shortcuts
|   |   |-- HeroBanner/         # Homepage hero, featured deals, service highlights
|   |   |-- ProductCard/        # Reusable product preview card
|   |   `-- ProductGrid/        # Reusable product listing section
|   |-- context/
|   |   `-- StoreContext.jsx    # Global cart and user state with localStorage sync
|   |-- data/
|   |   |-- products.js         # Generated categories and product catalog
|   |   `-- siteContent.js      # Footer links, quick links, and info pages
|   |-- pages/
|   |   |-- HomePage.jsx        # Landing page with hero and featured products
|   |   |-- CategoriesPage.jsx  # All category listing page
|   |   |-- CategoryPage.jsx    # Category-specific product page
|   |   |-- SearchResultsPage.jsx
|   |   |-- ProductDetailsPage.jsx
|   |   |-- CartPage.jsx
|   |   |-- SignInPage.jsx
|   |   |-- SignUpPage.jsx
|   |   |-- ProfilePage.jsx
|   |   |-- OrdersPage.jsx
|   |   |-- InfoPage.jsx
|   |   `-- NotFoundPage.jsx
|   |-- utils/
|   |   `-- format.js           # Slug generation and INR currency formatting
|   |-- App.jsx                 # Main route definitions and shared store layout
|   |-- index.css               # Global Tailwind-based styling
|   |-- index.js                # App export
|   `-- main.jsx                # Application entry point
|-- dist/                       # Production build output
|-- package.json
|-- vite.config.js
`-- eslint.config.js
```

## Detailed Description

### 1. Storefront Experience

The homepage is designed to feel like a real shopping platform instead of a simple landing page. It combines:

- a branded header with quick links, category shortcuts, cart access, and account actions
- a search flow that filters by keyword and category
- a hero section with featured deals and promotional content
- curated product shelves such as featured products and fresh arrivals
- direct navigation into category pages and product detail pages

### 2. Product Catalog System

The catalog is generated from a seeded category list in `src/data/products.js`. Each category produces multiple product variants such as Standard, Plus, Max, and Lite. This gives the app:

- 50 shopping categories
- 200 products across electronics, fashion, home, lifestyle, wellness, and more
- generated slugs, SKUs, prices, ratings, reviews, badges, stock values, and delivery labels

This approach makes the project useful as a UI demo because it provides a large dataset without needing a backend or external database.

### 3. Routing and Pages

The application uses React Router to create a full single-page application flow:

- `/` for the homepage
- `/categories` for the full category directory
- `/category/:categorySlug` for category-specific browsing
- `/search` for filtered search results
- `/product/:productSlug` for product detail pages
- `/cart` for cart review and checkout summary
- `/signin` and `/signup` for account access
- `/profile` for user details and quick actions
- `/orders` for mock order and tracking information
- `/info/:pageSlug` for static informational content

The shared layout keeps the header and footer consistent across all routes.

### 4. State Management

Global state is handled through `StoreContext`. It manages:

- cart items
- cart subtotal and item count
- quantity updates and item removal
- clear cart behavior
- mock sign-in and sign-out actions
- browser persistence using `localStorage`

Because the cart and user state are stored in the browser, the app can preserve the shopping session between refreshes without introducing a backend.

### 5. UI and Styling

The visual system is built with Tailwind CSS and uses:

- responsive layouts for mobile, tablet, and desktop
- gradient-heavy hero sections and branded commerce styling
- reusable product cards and grid layouts
- clear call-to-action buttons for shopping flows
- rounded card-based panels for catalog, cart, and account screens

The result is a polished storefront interface that is easy to extend with live APIs later.

### 6. Current Scope and Limitations

This project demonstrates frontend architecture and shopping flows, but some parts are intentionally mocked:

- authentication is simulated
- orders are derived from cart state
- product data is static/generated
- checkout is not connected to a payment provider
- there is no backend, admin panel, or database integration yet

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Why This Project Is Useful

Zaafree is a strong frontend portfolio project because it demonstrates:

- reusable React component architecture
- route-based page composition
- practical global state management
- responsive e-commerce UI design
- data-driven rendering from reusable product structures
- clean separation between pages, components, utilities, and mock content
