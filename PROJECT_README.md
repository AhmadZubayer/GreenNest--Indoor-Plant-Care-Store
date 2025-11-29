# GreenNest - Indoor Plant Care Store

GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants.

## Features

- **Authentication**: Secure Firebase authentication with Email/Password and Google Sign-In
- **Plant Catalog**: Browse and explore 6 different indoor plants with detailed information
- **Private Routes**: Protected plant details and profile pages
- **User Profile**: Update your display name and photo URL
- **Consultation Booking**: Book expert consultations for plant care
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS and DaisyUI

## Technologies Used

- React 19
- React Router 7
- Firebase Authentication
- Tailwind CSS 4
- DaisyUI
- React Hot Toast
- Vite

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Firebase account and project setup

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Update Firebase configuration in `src/authentication/firebase.init.js` with your own Firebase credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/pages/` - All page components (Home, Login, Signup, PlantDetails, etc.)
- `src/components/` - Reusable components (NavBar, Footer)
- `src/context/` - Authentication context and private route
- `src/routes/` - Router configuration
- `public/plants.json` - Plant data

## Features Implementation

✅ Firebase Authentication (Email/Password & Google)  
✅ Password validation (uppercase, lowercase, 6+ characters)  
✅ Password toggle visibility  
✅ Forgot Password functionality  
✅ Protected routes for plant details and profile  
✅ User profile update with updateProfile()  
✅ Responsive navbar with conditional rendering  
✅ Footer with social links  
✅ Home page with multiple sections  
✅ Toast notifications for user feedback  

## License

© 2025 GreenNest. All rights reserved.
