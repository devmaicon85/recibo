import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './pages/index'
import "./global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
