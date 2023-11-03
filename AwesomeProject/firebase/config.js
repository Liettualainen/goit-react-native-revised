// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1E_VHh7sHIMs2OVr3W19Snnx6hGrCsrY",
  authDomain: "collectionfoto-dd910.firebaseapp.com",
  projectId: "collectionfoto-dd910",
  storageBucket: "collectionfoto-dd910.appspot.com",
  messagingSenderId: "642937868940",
  appId: "1:642937868940:web:ef7f20c755a473940c61a9",
  measurementId: "G-MVPJX6SDLJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);