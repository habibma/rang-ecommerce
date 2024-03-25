// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAezZzED2_m4IKaUPnXrcfozOjF42PbZbc",
    authDomain: "ecommerce-rug.firebaseapp.com",
    projectId: "ecommerce-rug",
    storageBucket: "ecommerce-rug.appspot.com",
    messagingSenderId: "962907137998",
    appId: "1:962907137998:web:56aeac5d901228e24f2d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };