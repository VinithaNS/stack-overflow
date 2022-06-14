import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8yNfr2bKG--bFBssqgMwSRK2ahuuOoyk",
  authDomain: "stackoverflowclone-ee744.firebaseapp.com",
  projectId: "stackoverflowclone-ee744",
  storageBucket: "stackoverflowclone-ee744.appspot.com",
  messagingSenderId: "483600438724",
  appId: "1:483600438724:web:26ce6feaf0025dbdd511b9",
  measurementId: "G-LDJE2JW8YE",
};

const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export { auth, provider };