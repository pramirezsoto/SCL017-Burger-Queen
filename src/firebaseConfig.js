import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBG0R28qqwiLsPFmzxVZd1NWmp1SPFlMCw",
  authDomain: "variable-hamburguesa.firebaseapp.com",
  projectId: "variable-hamburguesa",
  storageBucket: "variable-hamburguesa.appspot.com",
  messagingSenderId: "715633918974",
  appId: "1:715633918974:web:9f2952cc5e6e23025f76af",
  measurementId: "G-8KLTC7LLTB",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
