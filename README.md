# Product List with Cart

A responsive e-commerce frontend demonstrating dynamic product listing and a functional shopping cart, built using modern JavaScript (ES6+), Tailwind CSS, and vanilla HTML/CSS. Fetches product data from a local JSON file and enables users to add, remove, and adjust item quantities with real-time total calculation.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Configuration](#configuration)

---

## Demo

![Product List with Cart Screenshot](/screenshot/desktop.png)

Live demo: [https://cart-with-product-list.netlify.app/]

---

## Features

1. **Dynamic Data Loading**: Fetches product details from `public/data/data.json` using the Fetch API.
2. **Modular Components**: Encapsulated product card and cart UI logic in separate JS modules (`product.js` and `cart.js`).
3. **Shopping Cart Functionality**:
   - Add and remove items
   - Increment/decrement item quantities
   - Real-time total price update
   - Confirmation action to simulate order placement
4. **Responsive Design**: Mobile-first layout optimized across breakpoints with Tailwind CSS utilities.
5. **Scalable Architecture**: Easily extensible for features like filtering, search, and persistent state.

---

## Tech Stack

- **HTML5**
- **CSS3 & Tailwind CSS**
- **JavaScript (ES6+)**
- **Fetch API**
- **Node.js & npm** (for dev tooling)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/okasha07/product-list-with-cart.git
   cd product-list-with-cart
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Build Tailwind CSS and start watching**:
   ```bash
   npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch
   ```
4. **Open** `index.html` in your browser or serve via a static server:
   ```bash
   npx serve .
   ```

---

## Usage

1. Open the app in a browser.
2. Browse the listed products.
3. Click **Add to Cart** to include items.
4. Use **+**/**−** buttons to adjust quantities or click the trash icon to remove items.
5. Click **Confirm Order** to simulate checkout and reset the cart.

---

## Folder Structure

```plaintext
product-list-with-cart/
├── public/
│   ├── assets/images/      # Product images
│   └── data/data.json      # Sample product data
├── screenshot/             # Project screenshots
├── src/
│   ├── app.js              # Entry point: initializes components
│   ├── components/
│   │   ├── product.js      # Renders product cards
│   │   └── cart.js         # Manages cart UI and logic
│   └── script/
│       ├── fetchData.js
│       ├── addProductToOrders.js
│       ├── deleteOrder.js
│       ├── increment.js
│       ├── decrement.js
│       └── confirmOrder.js
├── index.html              # Main HTML file
├── package.json            # npm metadata and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.cjs      # PostCSS plugins
```

---

## Scripts

| Command                                      | Description                     |
| -------------------------------------------- | ------------------------------- |
| `npm install`                                | Install project dependencies    |
| `npx tailwindcss -i ./src/css/input.css ...` | Build CSS and watch for changes |
| `npx serve .`                                | Serve the project locally       |

---

## Configuration

- **Tailwind**: Customize `tailwind.config.js` for theme extensions and custom breakpoints.
- **Data**: Update `public/data/data.json` to add or modify products.
