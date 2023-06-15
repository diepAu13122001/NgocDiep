import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";

const firebaseConfig = {
    apiKey: "AIzaSyCy1C86mv6SiJMUlHaqJF9KHJVKocgslBY",
    authDomain: "adminweb-honghan-jsi17.firebaseapp.com",
    databaseURL: "https://adminweb-honghan-jsi17-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "adminweb-honghan-jsi17",
    storageBucket: "adminweb-honghan-jsi17.appspot.com",
    messagingSenderId: "221372670814",
    appId: "1:221372670814:web:e6abde4ff07e8c60e7a5cf"
};

export const firebaseProject = initializeApp(firebaseConfig);
export const firestoreDataBase = getFirestore(firebaseProject);

