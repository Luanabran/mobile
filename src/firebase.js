import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDX9xB9Z4rR5xSv2SyPez98jsF8dVr-IeI",
    authDomain: "mindhub---mobile.firebaseapp.com",
    databaseURL: "https://mindhub---mobile.firebaseio.com",
    projectId: "mindhub---mobile",
    storageBucket: "mindhub---mobile.appspot.com",
    messagingSenderId: "441090161082",
    appId: "1:441090161082:web:f3da6fa409367f273e4583",
    measurementId: "G-V6BTG9P8NV"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
