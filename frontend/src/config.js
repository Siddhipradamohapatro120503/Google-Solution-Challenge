import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhfSEfNEaSoyMfBz-jh5p3150EldEwkF8",
  authDomain: "serenify-414817.firebaseapp.com",
  projectId: "serenify-414817",
  storageBucket: "serenify-414817.appspot.com",
  messagingSenderId: "495317321216",
  appId: "1:495317321216:web:041841df6c27a28dcd7ae5",
  measurementId: "G-8NSH46MVT9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;