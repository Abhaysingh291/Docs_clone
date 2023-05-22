import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv-C4H73lHbce_8vo7r6l4zhYl6ElaSyg",
  authDomain: "clone-docs-6a1d1.firebaseapp.com",
  projectId: "clone-docs-6a1d1",
  storageBucket: "clone-docs-6a1d1.appspot.com",
  messagingSenderId: "688855289350",
  appId: "1:688855289350:web:eb5ed45c3a1b159d433d87",
  measurementId: "G-NP9NSCFKJ7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
