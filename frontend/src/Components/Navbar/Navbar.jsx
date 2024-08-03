import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import login from '../../assets/login.png'
import { CarContext } from '../../context/CarContext'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("Home")
    const { token,setToken } = useContext(CarContext)
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
        
    }
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <Link onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""} to='/'>HOME</Link>
                <a href='#car-display' onClick={()=>{setMenu("popular")}} className={menu==="popular"?"active":""}>POPULAR SPORT</a>
                <Link to='/collection'>COLLECTION</Link>
                <a href='#footer' onClick={()=>{setMenu("about-us")}} className={menu ==="about-us"?"active":""}>ABOUT US</a>
            </div>
            <div className="navbar-right">
                <div className="login">
                    {!token ? <button onClick={() => setShowLogin(true)}>SIGN IN</button>
                        : <div className='navbar-profile'>
                        <img src={login} alt="" />
                        <ul className='nav-profile-dropdown'>
                            <li onClick={logout}><p>Logout</p></li>
                        </ul>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Navbar