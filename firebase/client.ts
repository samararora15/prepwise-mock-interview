import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHdMCXEHBLXLd_9W6bjih_aM48xuraRrg",
  authDomain: "my-prepwise.firebaseapp.com",
  projectId: "my-prepwise",
  storageBucket: "my-prepwise.firebasestorage.app",
  messagingSenderId: "603732008145",
  appId: "1:603732008145:web:b48857df8b53cbd48e79f0",
  measurementId: "G-8JR1C3SX6P"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);