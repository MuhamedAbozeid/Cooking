import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_COOKING_API_KEY,
    authDomain: process.env.REACT_APP_COOKING_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_COOKING_PROJECT_ID,
    storageBucket: process.env.REACT_APP_COOKING_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_COOKING_MESSSAGING_SENDER_ID,
    appId: process.env.REACT_APP_COOKING_APP_ID
  };


  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
 const projectFirestore = firebase.firestore()

 export { projectFirestore }