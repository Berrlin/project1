import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_logo from "../../assets/profile_logo.png"
const Navbar = () => {
  return (
    <div>
        <div  className="navbar">
            <img src={logo} alt="" />
            <img src={profile_logo} alt="" />
        </div>
        <h1>Car manager</h1>
    </div>
    
    
  )
}

export default Navbar