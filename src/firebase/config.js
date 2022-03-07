import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAJQtVB810xLi-gaJ3ewOJgWT6nWQahrS8",
    authDomain: "cooking-recipes-9881a.firebaseapp.com",
    projectId: "cooking-recipes-9881a",
    storageBucket: "cooking-recipes-9881a.appspot.com",
    messagingSenderId: "463612362812",
    appId: "1:463612362812:web:02a4dd310d29dde1424339"
  };


  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
 const projectFirestore = firebase.firestore()

 export { projectFirestore }