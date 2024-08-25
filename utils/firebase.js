// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXzocyJLsuwVHZj5GnFxJZtkrxsMrZkDg",
  authDomain: "mycode-ea8cb.firebaseapp.com",
  projectId: "mycode-ea8cb",
  storageBucket: "mycode-ea8cb.appspot.com",
  messagingSenderId: "591299697461",
  appId: "1:591299697461:web:d036f32f9877010ccf8a7c",
  measurementId: "G-JSES9YREB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);