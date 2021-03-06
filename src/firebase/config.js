import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAo3eHdkWXZAYPmpXD2gU7xMPOos3-O3ZU",
    authDomain: "udemy-vue-firebase-sites-7d16e.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-7d16e",
    storageBucket: "udemy-vue-firebase-sites-7d16e.appspot.com",
    messagingSenderId: "964750448771",
    appId: "1:964750448771:web:2b96f525c6f2fc4c1de3b6"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp } 