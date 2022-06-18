import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpe1wjhkklYOF0jQzOI3x65eHTqOInXRI",
  authDomain: "twitter-clone-c4c15.firebaseapp.com",
  databaseURL: "https://twitter-clone-c4c15-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-c4c15",
  storageBucket: "twitter-clone-c4c15.appspot.com",
  messagingSenderId: "426477930955",
  appId: "1:426477930955:web:f3b5236dd5c417a3000e4e",
  measurementId: "G-B0YYM4GE9M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;