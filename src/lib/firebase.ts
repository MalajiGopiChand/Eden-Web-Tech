import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrNLMaheLZGw3N28ZRCOne2J5PThATwyo",
  authDomain: "eden-6a463.firebaseapp.com",
  projectId: "eden-6a463",
  storageBucket: "eden-6a463.firebasestorage.app",
  messagingSenderId: "250519592417",
  appId: "1:250519592417:web:6395f514506141e508c6a0",
  measurementId: "G-ZCD7RF3VZX"
};

// Initialize Firebase securely (avoiding double initialization)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
