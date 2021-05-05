import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBtKQP7YEaPR8YX-WasTeFjAqGK1MymTYA',
  authDomain: 'linkedin-clone-1eb4c.firebaseapp.com',
  projectId: 'linkedin-clone-1eb4c',
  storageBucket: 'linkedin-clone-1eb4c.appspot.com',
  messagingSenderId: '179943701374',
  appId: '1:179943701374:web:f43a9b2bfe26dbfcf3112f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
