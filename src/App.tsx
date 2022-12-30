import './App.css'
import { db } from './config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { signInWithGoogle } from './auth/login-provider'

function App() {

  React.useEffect(() => {
    const getItems = async () => {
      const col = collection(db, 'items');
      const snapshot = await getDocs(col);
      const list = snapshot.docs.map(doc => doc.data());
      console.log(list)
      // console.log(list);
    }
    getItems();
  }, [])

  
  return (
    <div className="App">
      <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
    </div>
  )
}

export default App
