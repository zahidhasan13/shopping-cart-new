// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbfhBKNtQ7xhKYqycMBlGkkQGHs2m2nfQ",
  authDomain: "react-shopping-cart-e372c.firebaseapp.com",
  projectId: "react-shopping-cart-e372c",
  storageBucket: "react-shopping-cart-e372c.firebasestorage.app",
  messagingSenderId: "57763595973",
  appId: "1:57763595973:web:40a0a85cd49e3a7c4612ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
