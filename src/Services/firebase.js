import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBaHLQRLuyHLcVf8zarZZmQPKWJ3slKl1s",
  authDomain: "form-macan.firebaseapp.com",
  databaseURL: "https://form-macan-default-rtdb.firebaseio.com",
  projectId: "form-macan",
  storageBucket: "form-macan.appspot.com",
  messagingSenderId: "1038009159356",
  appId: "1:1038009159356:web:5fca8c121ad2d15693cab9"
};

firebase.initializeApp(firebaseConfig);

export default firebase