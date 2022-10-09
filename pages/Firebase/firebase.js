// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmed4wL3c0CE8kdzNvLXfWSQtUL5JS1zg",
  authDomain: "tokyomenk.firebaseapp.com",
  projectId: "tokyomenk",
  storageBucket: "tokyomenk.appspot.com",
  messagingSenderId: "100083364479",
  appId: "1:100083364479:web:f8c7685bfbdea9f62bc54a",
  measurementId: "G-TEB7655HLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const fireauth = getAuth(app);
const firestorage = getStorage(app);

export const firebaseApp = {
  app,
  firestore,
  fireauth,
  firestorage,
  analytics,
};
