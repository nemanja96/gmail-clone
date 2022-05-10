// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB7KvGIgLafodIemrrvAvrzVGtMYT1ldY",
  authDomain: "clone-d7a81.firebaseapp.com",
  projectId: "clone-d7a81",
  storageBucket: "clone-d7a81.appspot.com",
  messagingSenderId: "1057898156243",
  appId: "1:1057898156243:web:eb5660c5f340b6b3930426"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };