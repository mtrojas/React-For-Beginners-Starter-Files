import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfHRfcKm6ZT3x0zPx_PLd5KCUQccond84",
  authDomain: "catch-of-the-day-mtrojas.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mtrojas.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;