import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import 'react-toastify/dist/ReactToastify.css';
import UpdateCar from './pages/Update/Update';

const App = () => {
  const url = "https://project1-0yzw.onrender.com";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/update" element={<UpdateCar url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
