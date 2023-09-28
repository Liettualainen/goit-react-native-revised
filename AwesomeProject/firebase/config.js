// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// import { enableLogging } from "firebase/database";

// enableLogging(true);




const firebaseConfig = {
  apiKey: 'AIzaSyBX8GM118wbFG6l0Vr4DtTiYCHLuog4BfI',
  authDomain: 'goitreactnative.firebaseapp.com',
//   databaseURL: '<https://goitreactnative.firebaseio.com>',
  projectId: 'goitreactnative',
  storageBucket: 'goitreactnative.appspot.com',
  messagingSenderId: '526619511820',
  appId: '1:526619511820:android:d7646be79065ae8d787229',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);