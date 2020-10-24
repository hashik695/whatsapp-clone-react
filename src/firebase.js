import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCAWtT0erRVtV2cfRW804zYZ3quJhr16nQ",
    authDomain: "whatsapp-16422.firebaseapp.com",
    databaseURL: "https://whatsapp-16422.firebaseio.com",
    projectId: "whatsapp-16422",
    storageBucket: "whatsapp-16422.appspot.com",
    messagingSenderId: "869535994686",
    appId: "1:869535994686:web:f6039c880f6b59bd97926f",
    measurementId: "G-5D1JBWN5P6"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db;