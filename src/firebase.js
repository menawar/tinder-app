import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCd3Kc3ds0lrv6-sATo2ngtcUSXKi36ZQ",
  authDomain: "tinder-clone-30f10.firebaseapp.com",
  projectId: "tinder-clone-30f10",
  storageBucket: "tinder-clone-30f10.appspot.com",
  messagingSenderId: "840002403107",
  appId: "1:840002403107:web:7f516aa373bd6571c12a96",
  measurementId: "G-5ZY1HGGEQ4"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database; 