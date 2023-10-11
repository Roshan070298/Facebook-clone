// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjNYI72eZS41x3diuaudMHyaFUAC-ZkcA",
    authDomain: "facebook-clone-f4c9b.firebaseapp.com",
    projectId: "facebook-clone-f4c9b",
    storageBucket: "facebook-clone-f4c9b.appspot.com",
    messagingSenderId: "14714698430",
    appId: "1:14714698430:web:44f87582e364019aba3cef",
    measurementId: "G-PBS77NKML9"
  };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
//const db = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth, provider}
export default db;