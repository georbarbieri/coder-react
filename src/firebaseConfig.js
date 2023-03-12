import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTbE5tafetYFPMGpIoRMFbyp7UmK76CQU",
  authDomain: "fanshop-fb18a.firebaseapp.com",
  projectId: "fanshop-fb18a",
  storageBucket: "fanshop-fb18a.appspot.com",
  messagingSenderId: "523527463853",
  appId: "1:523527463853:web:597b21f9b722f663a1f724",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
