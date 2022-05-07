import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppPerguntasProvider } from './context/PerguntasContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPerguntasProvider>
    <App />
    </AppPerguntasProvider>
  </React.StrictMode>
)
