// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCraXi_PLJTayaUKqguYhORY3loyr9Xby0",
  authDomain: "ai-scheduler-eca3a.firebaseapp.com",
  projectId: "ai-scheduler-eca3a",
  storageBucket: "ai-scheduler-eca3a.firebasestorage.app",
  messagingSenderId: "562680118401",
  appId: "1:562680118401:web:d0a414e92c03a9b7e0e180",
  measurementId: "G-4V77YJMRP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/calendar");
googleProvider.addScope("https://www.googleapis.com/auth/gmail.readonly");
googleProvider.addScope('https://www.googleapis.com/auth/gmail.send');
googleProvider.addScope('https://www.googleapis.com/auth/gmail.modify');
export { auth, googleProvider };
