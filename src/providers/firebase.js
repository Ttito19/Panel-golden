// import firebase from "firebase/app";
import "firebase/firestore";
import * as firebase from "firebase";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBC4_saq-r4xMl6gQgVUCeKqpRlBYN5qY8",
  authDomain: "test-golden-62318.firebaseapp.com",
  databaseURL: "https://test-golden-62318.firebaseio.com",
  projectId: "test-golden-62318",
  storageBucket: "test-golden-62318.appspot.com",
  messagingSenderId: "762635858749",
  appId: "1:762635858749:web:e9d22626932539b5400b54",
  measurementId: "G-PHHYLF7ZQK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const storage = firebase.storage();

// export default firebase;
export { storage, firebase as default };
