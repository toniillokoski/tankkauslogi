import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBAHyu2KYWqUtB5HPyit3oSEsBralclR3w",
  authDomain: "tankkauslogi-e0cac.firebaseapp.com",
  databaseURL: "https://tankkauslogi-e0cac.firebaseio.com",
  projectId: "tankkauslogi-e0cac",
  storageBucket: "tankkauslogi-e0cac.appspot.com",
  messagingSenderId: "573297479603",
  appId: "1:573297479603:web:239453938c79381b2885c6"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;