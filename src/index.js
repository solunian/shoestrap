// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz4GAhDyqSZeJDwzAQtMLJf2udAQJEFbc",
  authDomain: "shoestrap-f1581.firebaseapp.com",
  projectId: "shoestrap-f1581",
  storageBucket: "shoestrap-f1581.appspot.com",
  messagingSenderId: "538847699694",
  appId: "1:538847699694:web:ce342f1c63cdd72c8009ff",
  measurementId: "G-VRCG6K2GS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);