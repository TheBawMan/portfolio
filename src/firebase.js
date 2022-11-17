import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBieBzahPwJAGxo4DgIAHs_voE9AZniUpI",
  authDomain: "arghadip-portfolio.firebaseapp.com",
  projectId: "arghadip-portfolio",
  storageBucket: "arghadip-portfolio.appspot.com",
  messagingSenderId: "497937616636",
  appId: "1:497937616636:web:f187c1ec191a87a4a25179"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();