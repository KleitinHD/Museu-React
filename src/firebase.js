import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };
