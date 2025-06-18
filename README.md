# 🛍️ SmartDrobe E-Commerce Platform

SmartDrobe is a modern, full-stack e-commerce platform built with the MERN stack, Stripe, Redis, and Tailwind CSS. It offers a seamless shopping experience, robust authentication, admin dashboard, and much more.

---

## 🚀 Features

- **🗄️ MongoDB & Redis Integration**  
  Efficient data storage with MongoDB and high-performance caching using Redis.

- **💳 Stripe Payment Setup**  
  Secure and smooth checkout process powered by Stripe.

- **🔐 Robust Authentication System**  
  Secure user authentication with JWT, refresh/access tokens, and cookie-based sessions.

- **🔑 JWT with Refresh/Access Tokens**  
  Automatic token refresh for persistent sessions and enhanced security.

- **📝 User Signup & Login**  
  Easy registration and login with validation and error handling.

- **🛒 E-Commerce Core**  
  Full-featured product catalog, categories, and shopping cart.

- **📦 Product & Category Management**  
  Admins can create, edit, and delete products and categories.

- **🛍️ Shopping Cart Functionality**  
  Add, remove, and update product quantities in your cart.

- **💰 Checkout with Stripe**  
  Fast and secure payments with real-time order processing.

- **🏷️ Coupon Code System**  
  Apply discount codes at checkout for instant savings.

- **👑 Admin Dashboard**  
  Manage products, view analytics, and oversee store operations.

- **📊 Sales Analytics**  
  Visualize sales data and track store performance (coming soon).

- **🎨 Design with Tailwind**  
  Responsive, modern UI built with Tailwind CSS.

- **🛒 Cart & Checkout Process**  
  Streamlined cart and checkout experience for users.

- **🔒 Security & 🛡️ Data Protection**  
  Follows best practices for authentication, authorization, and data privacy.

- **🚀 Caching with Redis**  
  Lightning-fast product and coupon lookups with Redis caching.

- **📝 Edit Profile & Add Address**  
  Users can update their profile information and add or edit their address directly from the profile page.

---

## 📦 Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose, Redis
- **Payments:** Stripe
- **Authentication:** JWT, Refresh/Access Tokens, Cookies
- **State Management:** Zustand

---

## 🛠️ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/smartdrobe.git
cd smartdrobe
```

### 2. Setup Environment Variables

- Copy `.env.example` to `.env` in both `backend/` and `frontend/` folders.
- Fill in your MongoDB, Redis, Stripe, and other credentials.

### 3. Install Dependencies

```sh
cd backend
npm install

cd ../frontend
npm install
```

### 4. Run the Application

- **Backend:**

  ```sh
  cd backend
  npm run dev
  ```

- **Frontend:**

  ```sh
  cd frontend
  npm run dev
  ```

---

## 📄 Additional Features

- **Profile Management:**  
  Users can edit their profile and add/update their address on the profile page.

- **Admin Controls:**  
  Only admins can access the dashboard and manage products.

- **Coupon System:**  
  Personalized coupon codes and discounts.

- **Order History:**  
  (Planned) Users will be able to view their past orders.

---

## 📚 Folder Structure

```
backend/
  controllers/
  models/
  routes/
  config/
  auth.utils/
frontend/
  src/
    components/
    pages/
    stores/
    ...
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

**Happy Shopping!**