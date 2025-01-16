// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {browserLocalPersistence} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2LcLdUqFoYn5zbCvS3Zf9jpXF5EIpG7I",
  authDomain: "eam-24-25.firebaseapp.com",
  databaseURL: "https://eam-24-25-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eam-24-25",
  storageBucket: "eam-24-25.firebasestorage.app",
  messagingSenderId: "83263300936",
  appId: "1:83263300936:web:ddceba8d63cd1df3143f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: browserLocalPersistence,
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);