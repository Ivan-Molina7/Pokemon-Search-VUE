/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR9jjMPfDs2VWRfJ14aET8OsBEVAWJlV8",
  authDomain: "vue-login-a45a4.firebaseapp.com",
  projectId: "vue-login-a45a4",
  storageBucket: "vue-login-a45a4.appspot.com",
  messagingSenderId: "797204518433",
  // eslint-disable-next-line quotes
  appId: "1:797204518433:web:aa28159665fd37c6ebb560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// eslint-disable-next-line import/prefer-default-export
export { auth };