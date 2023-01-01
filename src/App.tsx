import './App.css'
import { db } from './config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { signInWithGoogle } from './auth/login-provider'
import Router from './routes/Router'

function App() {
  return (
    <Router/>
  )
}

export default App
