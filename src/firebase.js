
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app'
import 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCILln8h1tkhNXC5K51rCQ9uACEZwpxbhU",
  authDomain: "nwitter2-22ef5.firebaseapp.com",
  projectId: "nwitter2-22ef5",
  storageBucket: "nwitter2-22ef5.appspot.com",
  messagingSenderId: "967923259452",
  appId: "1:967923259452:web:d798f621a9c9aff4414b39",
  measurementId: "G-47X0XJ9RQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics

export const authService = getAuth(app)
/*
const firebaseConfig = {
    apiKey: "AIzaSyBjeqFYudsmnvYS_5QtnEY8mfmM8-S7BlA",
    authDomain: "nwitter-38090.firebaseapp.com",
    projectId: "nwitter-38090",
    storageBucket: "nwitter-38090.appspot.com",
    messagingSenderId: "679018175908",
    appId: "1:679018175908:web:66e3ca805028a8d29d7531",
    measurementId: "G-BGRQKE2CMB"
  };
*/
 /*const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
export default analytics

export const authService = getAuth(app);
*/
/*
export default firebase.initializeApp(firebaseConfig)
export const authService = firebase.auth()
*/
