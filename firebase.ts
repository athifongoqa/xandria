import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "xandria-1444b.firebaseapp.com",
  projectId: "xandria-1444b",
  storageBucket: "xandria-1444b.appspot.com",
  messagingSenderId: "660655247887",
  appId: "1:660655247887:web:ea1fc9976f5d637916097a",
  measurementId: "G-KN0ZWDYNB6"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
