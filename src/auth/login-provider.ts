import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { db, app } from "../config/firebase";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const signInWithGoogle = async () => {
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
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logout
};