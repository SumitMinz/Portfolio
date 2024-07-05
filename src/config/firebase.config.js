import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS6QfcbOS9oDXpT40xP0DVCzgsSEVxYjA",
  authDomain: "portfolio-22eaa.firebaseapp.com",
  projectId: "portfolio-22eaa",
  storageBucket: "portfolio-22eaa.appspot.com",
  messagingSenderId: "385518849187",
  appId: "1:385518849187:web:d1558457feb566c47d4316",
  measurementId: "G-CPS86WFCP1"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
