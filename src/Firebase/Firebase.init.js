// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuHz42zm9YLOZCsUShjEUCFuK_XT3kgGg",
  authDomain: "gadget-freak-155bd.firebaseapp.com",
  projectId: "gadget-freak-155bd",
  storageBucket: "gadget-freak-155bd.appspot.com",
  messagingSenderId: "130176817218",
  appId: "1:130176817218:web:460089d268a36c688a75db",
  measurementId: "G-QY07R2TH37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;