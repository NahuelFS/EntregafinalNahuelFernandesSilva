

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAP4GXeVP9Ec4d9RzPybXOA-QDQt33VIO8",
  authDomain: "proyectofinal-4ded4.firebaseapp.com",
  projectId: "proyectofinal-4ded4",
  storageBucket: "proyectofinal-4ded4.appspot.com",
  messagingSenderId: "318216748016",
  appId: "1:318216748016:web:5a2cbe0fbbe7d00b493b35",
  measurementId: "G-Y2WE5KMEE8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
