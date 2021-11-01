import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyBvTct_dndvT3xO3S3goGyK-GhKQvCk4qs",
    authDomain: "clone-74d26.firebaseapp.com",
    projectId: "clone-74d26",
    storageBucket: "clone-74d26.appspot.com",
    messagingSenderId: "118595879099",
    appId: "1:118595879099:web:d45e572b5b993839ade99e",
    measurementId: "G-J4TXMP0DMW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };