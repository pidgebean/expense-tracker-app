import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDS37cW0mdh7WTOYB60YsLy4tArxzpNnQ8",
  authDomain: "expense-tracker-196a7.firebaseapp.com",
  projectId: "expense-tracker-196a7",
  storageBucket: "expense-tracker-196a7.appspot.com",
  messagingSenderId: "692458561539",
  appId: "1:692458561539:web:46acd5b6c71b5f9641ae36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);