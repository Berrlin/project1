import React from 'react'
import './Category.css'
import { menu_list } from '../../assets/assets'

const Category = ({ category, setCategory }) => {
    return (
        <div className="menu-list">
            {menu_list.map((e) => {
                return (
                    <div onClick={() => setCategory(prev => prev === e.menu_name ? "All" : e.menu_name)} key={e.menu_name} className={`menu-list-item ${category === e.menu_name ? "active" : ""}`}>
                        <img src={e.menu_image} alt="" />
                        <p>{e.menu_name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Category
