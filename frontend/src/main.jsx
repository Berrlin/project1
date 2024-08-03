import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CarContextProvider, { CarContext } from './context/CarContext.jsx'
import { BrowserRouter } from 'react-router-dom'
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet/dist/leaflet.css"
/>
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <CarContextProvider>
      <App />
    </CarContextProvider>
  </BrowserRouter>
    

  
)
