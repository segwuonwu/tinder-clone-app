import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkxf9dm3vAHHfcHN44NSMSAUEE7E0IRms",
    authDomain: "tinder-clone-3ea7b.firebaseapp.com",
    databaseURL: "https://tinder-clone-3ea7b.firebaseio.com",
    projectId: "tinder-clone-3ea7b",
    storageBucket: "tinder-clone-3ea7b.appspot.com",
    messagingSenderId: "231489239055",
    appId: "1:231489239055:web:cca35a52bc48f34f5ccb7a",
    measurementId: "G-TYHF7JQFK4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;