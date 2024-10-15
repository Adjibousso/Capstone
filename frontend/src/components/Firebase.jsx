import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4zsMoxTPhwDtsaKK-qHNJq2FczGM7vsY",
  authDomain: "capstone-auth-4f17a.firebaseapp.com",
  projectId: "capstone-auth-4f17a",
  storageBucket: "capstone-auth-4f17a.appspot.com",
  messagingSenderId: "593247401660",
  appId: "1:593247401660:web:c0bcaaffba57ad484602b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
