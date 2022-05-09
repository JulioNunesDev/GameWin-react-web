import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppBankProvider } from './contexts/usebank'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppBankProvider>
      <App />
    </AppBankProvider>
  </React.StrictMode>
)
