# 🛍️ Next.js Product App

A simple **Next.js 15 full-stack app** with authentication, product listing, and protected dashboard features. Built using **NextAuth.js**, **App Router**, and API routes for backend operations.

---

## 🚀 Features

1. **Landing Page (/**)  
   - Includes Navbar, Hero, Product Highlights, Footer  
   - Navigation to login and products  
   - Publicly accessible  

2. **Login (/login)**  
   - Authentication with NextAuth (Google or credentials)  
   - Redirects to `/products` after login  

3. **Product List (/products)**  
   - Publicly accessible  
   - Fetches and displays product list (from mock backend/file)  
   - Each product shows: name, description, price, and details button  

4. **Product Details (/products/[id])**  
   - Publicly accessible  
   - Displays full product details  

5. **Add Product (/dashboard/add-product)**  
   - Protected route (only logged-in users can access)  
   - Form to add a new product (saved in database/mock backend)  
   - Redirects unauthenticated users to `/login`  

---

## ⚡ Optional Enhancements
- Loading spinner while submitting forms  
- Toast notifications for successful actions  
- Theme toggle (light/dark)  

---

## 🛠️ Tech Stack
- **Next.js 15** (App Router)  
- **NextAuth.js** for authentication  
- **Route Handlers (/api)** for backend (or Express.js alternative)  
- **Tailwind CSS** for styling (optional but recommended)  

---

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/dip00-bb/jobtask-ecommerce

# Move into project directory
cd jobtask-ecommerce

# Install dependencies
npm install


# Run the development server
npm run dev
