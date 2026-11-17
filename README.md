# OneCart – MERN Stack E-Commerce Platform

OneCart is a full-stack e-commerce web application built using the MERN stack. It provides separate interfaces for customers and administrators, allowing users to browse products, manage their shopping cart, and place orders while administrators manage products and orders.

## Features

### User Panel
- User registration and login
- Google Authentication using Firebase
- Browse available products
- Add products to cart
- Manage shopping cart
- Place orders
- Razorpay payment integration (Test Mode)

### Admin Panel
- Admin authentication
- Add and manage products
- View product listings
- Manage customer orders
- Update order status

## Tech Stack

**Frontend**
- React.js
- JavaScript
- Tailwind CSS
- Redux Toolkit

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

**Integrations**
- Firebase Google Authentication
- Cloudinary for image storage
- Razorpay for payment integration (Test Mode)

## Project Structure

```text
OneCart/
├── admin/       # Admin dashboard
├── backend/     # Express.js backend and APIs
└── frontend/    # Customer-facing application
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/lakshrajput229/OneCart.git
cd OneCart
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder and configure your environment variables.

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

Configure the frontend environment variables.

### 4. Install admin dependencies

```bash
cd ../admin
npm install
```

Configure the admin environment variables.

### 5. Run the application

Start the backend, user frontend, and admin frontend in separate terminals using their respective development scripts.

## Developer

**Laksh Rajput**

- GitHub: https://github.com/lakshrajput229

## Project Background

This project was developed by Laksh Rajput as a hands-on MERN stack learning and development project, using an online tutorial as a learning reference. The current repository was restored from the reference project after the original local project files were lost. The application has been configured with the developer's own Firebase, Cloudinary, MongoDB, and Razorpay accounts.

