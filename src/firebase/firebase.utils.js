import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDLAE0xGcP-4N_Bg0N6-LaZYekrXuscU2Q',
  authDomain: 'crud-crwn-db.firebaseapp.com',
  projectId: 'crud-crwn-db',
  storageBucket: 'crud-crwn-db.appspot.com',
  messagingSenderId: '944781335902',
  appId: '1:944781335902:web:9c318541831f887e2fc3cf',
  measurementId: 'G-89F7385921',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
