// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjdTxz3UzZoIkuGvfRBdTN-6PhQkP8PW4",
  authDomain: "nextjs-auth-1198f.firebaseapp.com",
  projectId: "nextjs-auth-1198f",
  storageBucket: "nextjs-auth-1198f.appspot.com",
  messagingSenderId: "723379441629",
  appId: "1:723379441629:web:f8426622430962f692f034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();