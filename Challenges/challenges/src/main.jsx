import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App4 from './Challenge4/App4.jsx'
import App5 from './Challenge5/App5.jsx'
import App6 from './Challenge6/App6.jsx'
import App7 from './Challenge7/App7.jsx'
import { AuthProvider } from "./Challenge6/AuthContext";


createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <App7 />
  </AuthProvider>
)
