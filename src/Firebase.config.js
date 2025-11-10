// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UVUZ6rdf5TzehlcEuRHoGlJe8JKVZc8",
  authDomain: "utility-bill-management-6a9ad.firebaseapp.com",
  projectId: "utility-bill-management-6a9ad",
  storageBucket: "utility-bill-management-6a9ad.firebasestorage.app",
  messagingSenderId: "465692821279",
  appId: "1:465692821279:web:5299713a293d5b8a36d22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);