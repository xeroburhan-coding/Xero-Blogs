// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDI6Wgut2xdpTMgsvHb_5OPqD5uLCWjkk",
  authDomain: "xeroblog-a1106.firebaseapp.com",
  projectId: "xeroblog-a1106",
  storageBucket: "xeroblog-a1106.appspot.com",
  messagingSenderId: "1018191212766",
  appId: "1:1018191212766:web:83b069f36bbed40609924f",
  measurementId: "G-T8ZBE3TQXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
