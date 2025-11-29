// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqDiPVY9zF6-7lI7yfw0_Kh0Ng2_C67s",
  authDomain: "webdevprojects-90f77.firebaseapp.com",
  projectId: "webdevprojects-90f77",
  storageBucket: "webdevprojects-90f77.firebasestorage.app",
  messagingSenderId: "751212106210",
  appId: "1:751212106210:web:986015b50cdc3c8dc0a9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);