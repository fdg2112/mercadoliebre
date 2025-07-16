// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA2SA1gBrGp9dBvzlPxAKtuwmOXJ1tRAiM",
  authDomain: "mercadoliebre-b1316.firebaseapp.com",
  projectId: "mercadoliebre-b1316",
  storageBucket: "mercadoliebre-b1316.firebasestorage.app",
  messagingSenderId: "565049110520",
  appId: "1:565049110520:web:3f4721941488a31e72300d",
  measurementId: "G-4MLV70JPFP"
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);
const db = getFirestore(APP);

export { db };