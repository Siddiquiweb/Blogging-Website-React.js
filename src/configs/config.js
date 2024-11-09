
// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyCPeWBYkHihw7lYwxiTTFzt4GIikrE99_k",
  authDomain: "blogging-web-d7ddd.firebaseapp.com",
  projectId: "blogging-web-d7ddd",
  storageBucket: "blogging-web-d7ddd.firebasestorage.app",
  messagingSenderId: "833820015766",
  appId: "1:833820015766:web:2c440e7cea5c05aace16b7",
  measurementId: "G-4FC5SV2KLW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };