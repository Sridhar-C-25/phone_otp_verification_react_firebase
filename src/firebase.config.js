// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDypQXMFdNAwO6hbWItkvXYTNwx5DCRZj0",
  authDomain: "otp-project-66749.firebaseapp.com",
  projectId: "otp-project-66749",
  storageBucket: "otp-project-66749.appspot.com",
  messagingSenderId: "477285311617",
  appId: "1:477285311617:web:6ca702b87cee8523709980",
  measurementId: "G-SHE8YLYH3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
