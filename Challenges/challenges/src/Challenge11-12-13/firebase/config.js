// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBREDEjosGMwaOUEKmFKXAWa6HMo1DiQns",
  authDomain: "utracktask.firebaseapp.com",
  projectId: "utracktask",
  storageBucket: "utracktask.firebasestorage.app",
  messagingSenderId: "87763535621",
  appId: "1:87763535621:web:d175b314eee7e1f8da196c",
  measurementId: "G-N3VG3FSJKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
const dbRealTime = getDatabase(app);
export { dbRealTime, ref, set, push, onValue };
export const googleProvider = new GoogleAuthProvider();