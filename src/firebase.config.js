 
import{getApp,getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBXTNTX0Ex7WozntjM7LpYomu6ooHkb-9o",
    authDomain: "restaurantapp-39433.firebaseapp.com",
    databaseURL: "https://restaurantapp-39433-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "restaurantapp-39433",
    storageBucket: "restaurantapp-39433.appspot.com",
    messagingSenderId: "850562020012",
    appId: "1:850562020012:web:5e9c9cbfc87dbb0853a509"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};