import firebase from 'firebase'; 
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDLgyR0M7Qk_rG6JiX3v7Qn5ZPSWURSIi8",
    authDomain: "recetiapp.firebaseapp.com",
    databaseURL: "https://recetiapp.firebaseio.com",
    projectId: "recetiapp",
    storageBucket: "",
    messagingSenderId: "593389944464",
    appId: "1:593389944464:web:4d7ddc30493d8586772215",
    measurementId: "G-E39PNC4FC8"
  };
  firebase.initializeApp(firebaseConfig);
  
  export var db = firebase.firestore();