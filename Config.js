import firebase from 'firebase';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCoWcIAonrAA-KxwkTTsfkVV8svPiWDbgk",
    authDomain: "covid-app-162c3.firebaseapp.com",
    projectId: "covid-app-162c3",
    storageBucket: "covid-app-162c3.appspot.com",
    messagingSenderId: "348274779153",
    appId: "1:348274779153:web:62c150088dcbcf56f9fdb0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();