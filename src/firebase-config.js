// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// configuration Firebase

const firebaseConfig = {
  apiKey: "AIzaSyA5V2rR4h6JKcG7FoKehcBzuSI1O2eBD2I",
  authDomain: "connectify-b2ba2.firebaseapp.com",
  projectId: "connectify-b2ba2",
  storageBucket: "connectify-b2ba2.appspot.com",
  messagingSenderId: "888509904541",
  appId: "1:888509904541:web:c35f36a8de85c31c408674",
  measurementId: "G-5MC5CYHHKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // method authentification
const db = getFirestore(app);
// Initialize Firebase
const analytics = getAnalytics(app);

export { auth, db };
