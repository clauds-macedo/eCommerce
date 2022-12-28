import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDeSztaWIZoqya8nNRjYpyot4FSbcotdIc",
    authDomain: "ecommerce-5317f.firebaseapp.com",
    projectId: "ecommerce-5317f",
    storageBucket: "ecommerce-5317f.appspot.com",
    messagingSenderId: "636014272854",
    appId: "1:636014272854:web:e22bae912fd8f8edb876f7",
    measurementId: "G-RSWXHGHWSZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);