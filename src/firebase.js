import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkNovbjgLbX2W7c1jowV2ugKoXY9WBtmw",
  authDomain: "portfolio-lauragomes.firebaseapp.com",
  projectId: "portfolio-lauragomes",
  storageBucket: "portfolio-lauragomes.appspot.com",
  messagingSenderId: "380858606881",
  appId: "1:380858606881:web:24d68b3835e47e13a6ca60",
  measurementId: "G-F9BYL3W2X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);