import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDpTPfdYPVnst4PKiRAECAB24dIC_eWxw",
  authDomain: "applogin-fcc7c.firebaseapp.com",
  projectId: "applogin-fcc7c",
  storageBucket: "applogin-fcc7c.appspot.com",
  messagingSenderId: "639726971152",
  appId: "1:639726971152:web:daee88262ec1bc03cb5d95",
  measurementId: "G-QXW4D7V7YE"
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

