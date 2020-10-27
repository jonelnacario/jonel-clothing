import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAwJXKcFyHyZXBqwFMej0lfuw5FGTXx0U",
    authDomain: "crwn-db-5fb23.firebaseapp.com",
    databaseURL: "https://crwn-db-5fb23.firebaseio.com",
    projectId: "crwn-db-5fb23",
    storageBucket: "crwn-db-5fb23.appspot.com",
    messagingSenderId: "23790643954",
    appId: "1:23790643954:web:2445a1038e642414427e6b",
    measurementId: "G-96FNLCF6FY"
  };

  firebase.initializeApp(config);

  //* * Goolge authentication
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider); //* * This make a default google pop-out sign in design

  export default firebase;

