import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import React from "react";
import { db, app } from "../config/firebase";

interface IUserInterface {
  email: string | null;
  username: string | null;
}

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = () => {
  const signInWithGoogle = async () => {
    setPersistence(auth, inMemoryPersistence).then(async () => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
          });
        }
      } catch (err) {
        console.error(err);
        console.log(err);
      }
    });
  };

  const logout = () => {
    signOut(auth);
  };

  return {
    auth,
    db,
    signInWithGoogle,
    logout,
  };
};

export default AuthProvider;
