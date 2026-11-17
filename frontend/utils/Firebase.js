import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-f3849.firebaseapp.com",
  projectId: "loginonecart-f3849",
  storageBucket: "loginonecart-f3849.firebasestorage.app",
  messagingSenderId: "630709137910",
  appId: "1:630709137910:web:25c2c4d87d100cc36097d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };





// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCt8lzl337c6Arxo8V9NN17XfVR0YvDEag",
//   authDomain: "loginonecart-f3849.firebaseapp.com",
//   projectId: "loginonecart-f3849",
//   storageBucket: "loginonecart-f3849.firebasestorage.app",
//   messagingSenderId: "630709137910",
//   appId: "1:630709137910:web:25c2c4d87d100cc36097d7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);







