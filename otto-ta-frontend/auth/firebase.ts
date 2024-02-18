// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3UA9nPSmjJyDO-P2BZJUdXhAW6aQvGEc",
  authDomain: "otto-ta.firebaseapp.com",
  projectId: "otto-ta",
  storageBucket: "otto-ta.appspot.com",
  messagingSenderId: "835465422972",
  appId: "1:835465422972:web:1a4d891c585353115801f9",
  measurementId: "G-H8DL9JDX42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
