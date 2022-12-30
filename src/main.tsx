import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductsForm from './pages/ProductsForm'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsForm />
  </React.StrictMode>,
)
