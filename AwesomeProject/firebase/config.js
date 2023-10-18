import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA1E_VHh7sHIMs2OVr3W19Snnx6hGrCsrY",
  authDomain: "collectionfoto-dd910.firebaseapp.com",
  projectId: "collectionfoto-dd910",
  storageBucket: "collectionfoto-dd910.appspot.com",
  messagingSenderId: "642937868940",
  appId: "1:642937868940:web:ef7f20c755a473940c61a9",
  measurementId: "G-MVPJX6SDLJ"


  // apiKey: 'AIzaSyBX8GM118wbFG6l0Vr4DtTiYCHLuog4BfI',
  // authDomain: 'goitreactnative.firebaseapp.com',
//   databaseURL: '<https://goitreactnative.firebaseio.com>',
  // projectId: 'goitreactnative',
  // storageBucket: 'goitreactnative.appspot.com',
  // messagingSenderId: '526619511820',
  // appId: '1:526619511820:android:d7646be79065ae8d787229',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);