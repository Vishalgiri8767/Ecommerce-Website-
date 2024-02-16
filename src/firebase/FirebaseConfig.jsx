// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCP2ZFadGFxxc0PEiATIMYiqRLQPJy0Vbk",
  authDomain: "e-commerce-web-app-2d378.firebaseapp.com",
  projectId: "e-commerce-web-app-2d378",
  storageBucket: "e-commerce-web-app-2d378.appspot.com",
  messagingSenderId: "826817630143",
  appId: "1:826817630143:web:bacbd4c57306a6b66bdb0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const fireDB = getFirestore(app);
 const auth = getAuth(app);

 export  {fireDB, auth};