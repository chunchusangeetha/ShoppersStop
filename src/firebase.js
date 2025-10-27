import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7QPfJFjcCF0olq0b5WB01TyI0gX6N1i8",
  authDomain: "react-app-98332.firebaseapp.com",
  projectId: "react-app-98332",
  storageBucket: "react-app-98332.firebasestorage.app",
  messagingSenderId: "802141736345",
  appId: "1:802141736345:web:b67dd024266e7eb7121708",
  measurementId: "G-5ZE8B0LFE8",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
