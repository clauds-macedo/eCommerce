import './App.css'
import { db } from './config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { signInWithGoogle } from './auth/login-provider'
import Home from './pages/Home'

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
    <Home/>
  )
}

export default App
