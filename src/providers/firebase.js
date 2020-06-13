// import firebase from "firebase/app";
import "firebase/firestore";
import * as firebase from "firebase";
var firebaseConfig = {
  // apiKey: "AIzaSyC9cIoI6XubxQmJ5_sXq6uv1kx2svXv7RI",
  // authDomain: "panelgolden.firebaseapp.com",
  // databaseURL: "https://panelgolden.firebaseio.com",
  // projectId: "panelgolden",
  // storageBucket: "panelgolden.appspot.com",
  // messagingSenderId: "169181797730",
  // appId: "1:169181797730:web:76f54402feb9b30757203b",
  // measurementId: "G-8VE9ESVKEE",
  apiKey: "AIzaSyABHVL7Ucr0Xh7gdBZ87vXPlloHeA1zzo0",
  authDomain: "panel-prueba-golden.firebaseapp.com",
  databaseURL: "https://panel-prueba-golden.firebaseio.com",
  projectId: "panel-prueba-golden",
  storageBucket: "panel-prueba-golden.appspot.com",
  messagingSenderId: "557660894947",
  appId: "1:557660894947:web:49b8fbf11ee19f3c1e77d6",
  measurementId: "G-0XBBLL3RT6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
