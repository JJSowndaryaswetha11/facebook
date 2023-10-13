// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIimon_EdTnswuCcRuUe-KsKTjKefGxMo",
  authDomain: "fbclone-53b56.firebaseapp.com",
  projectId: "fbclone-53b56",
  storageBucket: "fbclone-53b56.appspot.com",
  messagingSenderId: "1074401015802",
  appId: "1:1074401015802:web:7cac4046d78293e29a1643",
  measurementId: "G-FYH72B07DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)
export const provider=new GoogleAuthProvider();

export default db;