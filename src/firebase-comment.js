import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb5xJdxnWot1JnFIte5x1MyzHe2B0Tx18",
  authDomain: "portfolio-9f284.firebaseapp.com",
  projectId: "portfolio-9f284",
  storageBucket: "portfolio-9f284.firebasestorage.app",
  messagingSenderId: "620482819587",
  appId: "1:620482819587:web:d2b2480053761fd5f7c036",
  measurementId: "G-HL1MQRPM5D"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'portfolio-2900b-70b95');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };