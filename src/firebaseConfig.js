// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDET66rwcrhCfTvLc8pRvxBr9_hJrQ8K_g",
  authDomain: "museudigital1.firebaseapp.com",
  databaseURL: "https://museudigital1-default-rtdb.firebaseio.com",
  projectId: "museudigital1",
  storageBucket: "museudigital1.appspot.com",
  messagingSenderId: "864111874677",
  appId: "1:864111874677:web:5242eaa8ad25eadc2bde3c",
  measurementId: "G-WDPWEB4W70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
