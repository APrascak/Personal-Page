import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAYrfq9Har-VVF3GEigWa2squAW6uIEmA0",
    authDomain: "prascak-personal-site.firebaseapp.com",
    databaseURL: "https://prascak-personal-site.firebaseio.com",
    projectId: "prascak-personal-site",
    storageBucket: "prascak-personal-site.appspot.com",
    messagingSenderId: "497582637737",
    appId: "1:497582637737:web:2cafd308be46c45c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
