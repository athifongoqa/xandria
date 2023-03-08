import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsLHZwXlhDIR_tR9Ao-Z2UkTLb9Tsx9ko",
  authDomain: "magnetic-fe.firebaseapp.com",
  projectId: "magnetic-fe",
  storageBucket: "magnetic-fe.appspot.com",
  messagingSenderId: "1013191445579",
  appId: "1:1013191445579:web:64aff0d8047f1d935911ce",
  measurementId: "G-F8DN27RXD9"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
