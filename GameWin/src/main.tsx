import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppBankProvider } from './contexts/usebank'
import { AppPluginProvider } from './contexts/usePluginModal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppBankProvider>
    <AppPluginProvider>

      <App />
    </AppPluginProvider>
    </AppBankProvider>
  </React.StrictMode>
)
