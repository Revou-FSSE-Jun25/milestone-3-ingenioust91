# RevoShop

**RevoShop** is a modern e-commerce web application built with Next.js. It provides users with a seamless shopping experience and includes an integrated admin panel for managing products.

**Live Deployment:** [shop.byingesalim.site](https://shop.byingesalim.site)

---

## Features

- Browse products by category or search query
- View detailed product pages
- Add items to the shopping cart
- Manage products through the admin panel
- Server-Side Rendering (SSR) for better SEO  
- Client-Side Rendering (CSR) for admin interactions  

---

## Components Overview

### 1. **Header & Footer**
- Displayed across all pages.  
- Imported in `layout.tsx`.  
- Contain navigation links and footer information.

### 2. **ProductList**
- Container component used to render multiple `Card` components.

### 3. **Card**
- Displays individual product information including **image**, **title**, and **price**.

### 5. **AddToCart**
- Container for managing products added to the shopping cart.

### 6. **ProductCart**
- Displays the **image**, **title**, **ID**, and **price** of items inside the cart.

---

## Pages

### 1. **ProductCategory**
- Shows product cards filtered by category.

### 2. **ProductDetail**
- Displays detailed information for a single product filtered by its **ID**.

### 3. **ProductSearch**
- Shows products filtered by a **search query** (based on title).

### 4. **Policy**
- Contains text for the e-commerce policy page.

### 5. **Admin**
- Admin homepage, serving as the entry point for the admin panel.

### 6. **InputPage**
- To input and manage product data.

### 7. **AdminListPage**
- Displays all products (unfiltered), mainly for admin use.

### 8. **EditPage**
- To edit product data.

---

## Rendering Strategy

| Page | Rendering Type | Description |
|------|----------------|-------------|
| Home | **SSR** | Server-Side Rendering for fast loading and SEO |
| Product Category | **SSR** | Category-based product filtering |
| Product Detail | **CSR** | Dynamic product detail loading |
| Admin Panel | **CSR** | Client-Side Rendering for real-time admin interactions |
| FAQ | **SSG** | Static Site Generation, only render HTML |

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **State Management:** React Hooks & Local Storage
- **API:** [Platzi Fake Store API](https://fakeapi.platzi.com/)

---

## What's for Update
- **Cart:** add quantity and product with same key should be combine
- **Admin:** add log in page

=======
## Author

**Inge Salim**  
🔗 [byingesalim.site](https://byingesalim.site)
