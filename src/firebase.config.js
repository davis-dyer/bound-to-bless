import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD0TeXWgDFqE6yLtOPA97GtBCWYjQ0RcjQ",
    authDomain: "cake-app-a5441.firebaseapp.com",
    databaseURL: "https://cake-app-a5441-default-rtdb.firebaseio.com",
    projectId: "cake-app-a5441",
    storageBucket: "cake-app-a5441.appspot.com",
    messagingSenderId: "882185681924",
    appId: "1:882185681924:web:55a6f99e2ff318450f4951",
    measurementId: "G-7X2RQHJF61"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }