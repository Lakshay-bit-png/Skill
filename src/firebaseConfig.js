// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj7kmfFEIuPHes1oVXLncAO9QSMpqsEFM",
  authDomain: "login-form-91ac3.firebaseapp.com",
  projectId: "login-form-91ac3",
  storageBucket: "login-form-91ac3.appspot.com",
  messagingSenderId: "1084311243597",
  appId: "1:1084311243597:web:71177c72921f7197514504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
