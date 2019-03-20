
import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyDN7W5g_724VA_uJHbONbdLRof2zzaP4oQ",
    authDomain: "phonebook-cfacc.firebaseapp.com",
    databaseURL: "https://phonebook-cfacc.firebaseio.com/",
    projectId: "phonebook-cfacc",
    storageBucket: "https://phonebook-cfacc.firebaseio.com/",
    messagingSenderId: 295324179324,
  };

  firebase.initializeApp(config)

  export default firebase;