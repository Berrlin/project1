import React from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom"
import addicon from "../../assets/addicon.png"
import listicon from "../../assets/listicon.png"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to={'/add'} className="sidebar-option">
                    <img src={addicon} alt="" />
                    <p>Add Car</p>
                </NavLink>
                <NavLink to={'/list'} className="sidebar-option">
                    <img src={listicon} alt="" />
                    <p>List Car</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar