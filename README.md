### Marketplace App
A cross-platform e-commerce mobile application built with React Native and Expo.
The application provides a mobile marketplace experience where users can browse product listings, add new products, and go through a purchase flow — backed by Firebase services and secured with Clerk authentication.
Note: This project was originally built in 2023–2024 as a learning project exploring cross-platform mobile development with React Native and Expo.

### Overview
Marketplace App demonstrates a complete mobile commerce flow: from user authentication to product discovery, product management, and purchasing — all inside a single cross-platform codebase.
Users can:
Sign in with their Google account
Browse available product listings
Add new products with images
View product details
Go through the product purchase flow

### Key Features
Authentication
User authentication is handled through Clerk, with Google Sign-In as the login method.
This provides secure, account-based access to user-specific features such as adding products and making purchases.
Product Listings
The app displays a browsable catalog of products stored in Firebase.
Each product includes its details and images, which are stored and served through Firebase Storage.
Add Products
Authenticated users can create new product listings, including uploading product images.
This covers the full create-side of a marketplace: form input, image upload, and data persistence.
Purchase Flow
Users can go through the product purchase flow, completing the core buy-side journey of a marketplace application.
Cross-Platform UI
The interface is built with NativeWind (Tailwind CSS for React Native), producing a consistent mobile UI from a single codebase that runs on both Android and iOS via Expo.

### Tech Stack
Mobile
React Native
Expo
NativeWind (Tailwind CSS for React Native)
Authentication
Clerk (Google OAuth)
Backend & Data
Firebase (application backend and data layer)
Firebase Storage (product images and media)

### Screenshots
![388shots_so](https://github.com/alwan2398/market-place-V1/assets/144940362/83babe14-522a-4891-badf-62c8873b8f29)

Home / Product List
Product Detail
Add Product
!Home
!Detail
!Add product

### Local Development
Clone the repository:
git clone https://github.com/alwan2398/market-place-V1
Install dependencies:
npm install
Configure the required services:
Firebase — fill in your Firebase project configuration in firebaseConfig.jsx
Clerk — set your Clerk publishable key for Google Sign-In
Start the Expo development server:
npx expo start
Then run the application on an Android emulator, iOS simulator, or a physical device using Expo Go.

### Project Structure
├── App.js              # Application entry point
├── app.json            # Expo configuration
├── firebaseConfig.jsx  # Firebase project configuration
├── tailwind.config.js  # NativeWind / Tailwind configuration
├── assets/             # Static assets and images
├── component/          # Reusable UI components
└── hooks/              # Custom React hooks

### Current Limitations
As an early learning project, the following are not part of the current version:
Real payment gateway integration
Order tracking and history
Advanced search and filtering
Production app store release

### What This Project Demonstrates
Cross-platform mobile development with React Native and Expo
Third-party authentication (Clerk + Google OAuth)
Cloud backend integration with Firebase
Image upload and storage handling
Utility-first styling on mobile with NativeWind
End-to-end marketplace user flows (browse → add → buy)

### Author
Muhamad Alwan — Full-Stack Developer, Mobile Developer & AI Engineer
Portfolio: https://masalwan.my.id
GitHub: https://github.com/alwan2398
