// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyCcWySC3GzCXK6A23GgXbkCQ8wOknvCSb0",
  authDomain: "react-login-firebase-11223.firebaseapp.com",
  projectId: "react-login-firebase-11223",
  storageBucket: "react-login-firebase-11223.appspot.com",
  messagingSenderId: "801246493309",
  appId: "1:801246493309:web:c9a89c73533c4cf40e0f14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
