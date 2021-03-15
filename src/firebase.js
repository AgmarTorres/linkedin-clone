import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCga9EgL0V1ohpVmudq1CZbmU2jVlSb_tc',
  authDomain: 'likedin-clone-64341.firebaseapp.com',
  projectId: 'likedin-clone-64341',
  storageBucket: 'likedin-clone-64341.appspot.com',
  messagingSenderId: '305870877381',
  appId: '1:305870877381:web:3b3ae51630b9a2895436ac',
  measurementId: 'G-TMNRTTGH6F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
