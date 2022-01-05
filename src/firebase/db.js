// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA81UR8jy06_Qj8Adjvai4OYB1jt0Y1Aa0",
  authDomain: "todolist-cda12.firebaseapp.com",
  projectId: "todolist-cda12",
  storageBucket: "todolist-cda12.appspot.com",
  messagingSenderId: "777957244844",
  appId: "1:777957244844:web:d175096d6fbcb518990409",
  measurementId: "G-WK0VH6HK15"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig).firestore();
