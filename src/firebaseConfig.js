//Configuración Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
firebase.initializeApp(firebaseConfig);

export {firebase};

const db = firebase.firestore();


//Función que guarda los elementos del OrderSummary en la base de datos
export function savingDataFirebase(billItems){
  db.collection('pedidos').add({
    pedidos: billItems,
    
  });
}
