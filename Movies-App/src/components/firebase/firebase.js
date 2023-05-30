
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBBbX7mBPhrVBF-ZB1mrBa_sXm-V0fxH-M",
  authDomain: "movieapp-5a791.firebaseapp.com",
  projectId: "movieapp-5a791",
  storageBucket: "movieapp-5a791.appspot.com",
  messagingSenderId: "629181118910",
  appId: "1:629181118910:web:a988124fc6bb914dffa1ef"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;