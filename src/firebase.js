import firebase from 'firebase/app';
import 'firebase/database'; // Import Realtime Database module if not already imported

const firebaseConfig = {
    apiKey: "AIzaSyCxn1Fb6ZH4vfCPhuxCA19rkNZiftrMxH8",
    authDomain: "amaktech-expense-tracker.firebaseapp.com",
    databaseURL: "https://amaktech-expense-tracker-default-rtdb.firebaseio.com",
    projectId: "amaktech-expense-tracker",
    storageBucket: "amaktech-expense-tracker.appspot.com",
    messagingSenderId: "906621279983",
    appId: "1:906621279983:web:2b2296f499f775ba1ec51a",
    measurementId: "G-NB9M9GSES2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export default db;