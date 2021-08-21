import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyBapseTRcbR4T_2hGqV-92piusQZqtnJFs",
   authDomain: "storybook-9f5c5.firebaseapp.com",
   projectId: "storybook-9f5c5",
   storageBucket: "storybook-9f5c5.appspot.com",
   messagingSenderId: "726390945074",
   appId: "1:726390945074:web:38e226594d5b19d2b6932b",
   measurementId: "G-WD01GWDGBD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;