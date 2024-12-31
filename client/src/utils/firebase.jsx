
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "travelagency-22504.firebaseapp.com",
  projectId: "travelagency-22504",
  storageBucket: "travelagency-22504.firebasestorage.app",
  messagingSenderId: "370454169947",
  appId: "1:370454169947:web:c9a6299321a95d4c40b27e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

