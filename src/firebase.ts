import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUzr9j8qb21fzGuBeUBjvLeegcu__-qj0",
    authDomain: "mangotime-702b0.firebaseapp.com",
    databaseURL: "https://mangotime-702b0.firebaseio.com",
    projectId: "mangotime-702b0",
    storageBucket: "mangotime-702b0.appspot.com",
    messagingSenderId: "972471167564",
    appId: "1:972471167564:web:97e5d39536b0bb445a22e9"
  };
  
 const app = firebase.initializeApp(firebaseConfig);
 export const auth = app.auth();
 export const firestore = app.firestore();


  