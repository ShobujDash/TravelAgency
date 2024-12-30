import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "flowbite"; // Import Flowbite's JavaScript functionality

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)