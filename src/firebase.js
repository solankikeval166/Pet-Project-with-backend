import firebase from 'firebase';

// eslint-disable-next-line 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbJds193-nzNqVPAaeHqJECkQHLMpkflM",
    authDomain: "pet-project-4ce24.firebaseapp.com",
    projectId: "pet-project-4ce24",
    storageBucket: "pet-project-4ce24.appspot.com",
    messagingSenderId: "525803137715",
    appId: "1:525803137715:web:a62ff1941f3d3ba12b9ec6",
    measurementId: "G-DY76M9QZRR"
});

const auth = firebase.auth();

export { auth };