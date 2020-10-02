// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


const firebaseConfig = {
  apiKey: "AIzaSyCm_gZyjq4SHRB04WbKdsv8u58fu812_Qw",
  authDomain: "multido-d1196.firebaseapp.com",
  databaseURL: "https://multido-d1196.firebaseio.com",
  projectId: "multido-d1196",
  storageBucket: "multido-d1196.appspot.com",
  messagingSenderId: "742608632107",
  appId: "1:742608632107:web:a8b893e6fed6a2e9932d6e",
  measurementId: "G-C4VW4P4T37"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;