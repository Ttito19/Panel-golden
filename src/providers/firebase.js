// import firebase from "firebase/app";
import "firebase/firestore";
import * as firebase from "firebase";

//var firebaseConfig = {
  // apiKey: "AIzaSyC9cIoI6XubxQmJ5_sXq6uv1kx2svXv7RI",
  // authDomain: "panelgolden.firebaseapp.com",
  // databaseURL: "https://panelgolden.firebaseio.com",
  // projectId: "panelgolden",
  // storageBucket: "panelgolden.appspot.com",
  // messagingSenderId: "169181797730",
  // appId: "1:169181797730:web:76f54402feb9b30757203b",
  // measurementId: "G-8VE9ESVKEE",
  /*----------------------------------------------------*/ 
  /*apiKey: "AIzaSyABHVL7Ucr0Xh7gdBZ87vXPlloHeA1zzo0",
  authDomain: "panel-prueba-golden.firebaseapp.com",
  databaseURL: "https://panel-prueba-golden.firebaseio.com",
  projectId: "panel-prueba-golden",
  storageBucket: "panel-prueba-golden.appspot.com",
  messagingSenderId: "557660894947",
  appId: "1:557660894947:web:49b8fbf11ee19f3c1e77d6",
  measurementId: "G-0XBBLL3RT6",*/
  /*----------------------------------------------------*/ 
//};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var firebaseConfig = {
  apiKey: "AIzaSyBgPO2r_h1qkaB7KAIpGAhIts9CSwQBTsQ",
  authDomain: "registro-4629f.firebaseapp.com",
  databaseURL: "https://registro-4629f.firebaseio.com",
  projectId: "registro-4629f",
  storageBucket: "registro-4629f.appspot.com",
  messagingSenderId: "16638127874",
  appId: "1:16638127874:web:ffca0d79a1cce9882f1c1b",
  measurementId: "G-0Y195YL9G4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
