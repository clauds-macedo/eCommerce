import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductsForm from './pages/ProductsForm'
import App from './App'
import './index.css'
import { AppProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>,
)
