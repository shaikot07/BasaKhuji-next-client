# 🏠 BashaKhuji.com - Smart Rental Housing Platform

## 📌 Project Overview
**BashaKhuji** is a full-stack web application that connects **landlords**, **tenants**, and an **admin** to provide a seamless rental experience. The platform features house listings, request handling, secure payments, and role-based dashboards — all in one place.

## 🛠️ Technologies Used
- **Frontend:** Next.js, TypeScript, React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Payment Gateway:**  ShurjoPay


## 🔑 Main Features

### 👥 User Roles & Authentication
- **Custom Registration & Login** using JWT
- Roles: 👤 **Tenant**, 🏘️ **Landlord**, 👮‍♂️ **Admin**
- Passwords securely stored with **bcrypt** 🔒
- **Role-based access** to dashboards and features

### 🌍 Public Routes
#### 🏡 Home Page
- Hero section with headline and search options
- Navigation bar with links to listings, dashboard, about, etc.

#### 📃 All Rental Listings
- Search 🔍 by **location**, **price**, **bedrooms**
- Filter results in real-time
- Each listing card includes:
  - 📍 Location
  - 🖼️ Image gallery
  - 💬 Description
  - 💰 Rent
  - 🛏️ Number of bedrooms
  - 🔗 View Details button

#### ℹ️ About Us Page
- Mission, team info, and contact details

### 🔐 Private Routes

#### 🏘️ Add Rental House (Landlord Only)
- Location, rent, bedrooms, description, multiple images, amenities
- Submit form to post new listing

#### 📄 Rental House Details Page
- All listing info with image carousel
- 📝 "Request Rental" modal for tenants with:
  - Move-in date
  - Duration
  - Special notes

#### 📬 Rental Request (Tenant Only)
- Pre-filled contact info
- Terms agreement checkbox
- Submit to notify landlord

#### 🧾 Owner Workflow
- Landlord views requests
- Can ✅ Approve or ❌ Reject
- Upon approval:
  - Tenant sees payment option
  - Landlord can add phone number for contact

### 📊 Role-Based Dashboards
#### 👮 Admin Dashboard
- Manage all users and listings
- Approve/remove listings
- Change roles and deactivate accounts

#### 🏘️ Landlord Dashboard
- View/Edit/Delete rental posts
- Respond to tenant requests
- Initiate payment and provide contact number

#### 👤 Tenant Dashboard
- Track submitted rental requests
- View status: Pending / Approved / Rejected
- See payment option and landlord contact upon approval

### ⚙️ Common Features
- ✏️ Edit Profile (username, email, etc.)
- 🔐 Change Password with validation
- 📧 Email notifications for updates

## 📂 Backend API Overview

### 📬 Tenants
- `POST /tenants/requests` – Submit rental request  
- `GET /tenants/requests` – View all submitted requests  
- `PUT /tenants/profile` – Update profile  

### 🏘️ Landlords
- `POST /landlords/listings` – Create new listing  
- `GET /landlords/listings` – View own listings  
- `PUT /landlords/listings/:id` – Edit listing  
- `DELETE /landlords/listings/:id` – Remove listing  
- `GET /landlords/requests` – View incoming requests  
- `PUT /landlords/requests/:id` – Approve or reject requests  

### 👮 Admin
- `GET /admin/users` – View all users  
- `PUT /admin/users/:id` – Update user roles  
- `DELETE /admin/user/:id` – Delete user  
- `GET /admin/listings` – View all listings  
- `PUT /admin/listings/:id` – Moderate listing  
- `DELETE /admin/listings/:id` – Remove listing  

## 🚀 Installation & Setup

### 💻 Backend Setup
```sh
# Clone the repo
git clone https://github.com/shaikot07/Basakhuji-server.git

# Install dependencies
npm install

# Environment Variables (.env)
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=
DCRYPT_SALT_ROUNDS=

SP_USERNAME=
SP_PASSWORD=
SP_PREFIX=
# SP_RETURN_URL=http:
# SP_RETURN_URL=https:
# nodemailer credentials
# for sending email
NODE_MAILER_USER=your email
NODE_MAILER_PASSWORD=your password



# Start server
npm run dev

### 🌐 Frontend Setup
bash
git clone https://github.com/shaikot07/BasaKhuji-next-client.git
cd ../frontend
npm install
npm run dev
```

## 🎯 Future Enhancements
- 💬 Live chat system between tenants and landlords  
- 🛒 Wishlist for tenants  
- ⭐ Reviews and Ratings for landlords/houses  
- 📍 Interactive maps with geo-location  
- 📧 SMS or WhatsApp notification integration  

## 🎯 Live Project Front End Link : https://basa-khuji-next-client.vercel.app/
## 🎯 Live Project back End Link : https://basa-khuji-server.vercel.app/api

## ✨ Developed By
🚀 **Saiful Islam Shaikot**  
