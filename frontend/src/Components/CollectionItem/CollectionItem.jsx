import React, { useContext } from 'react'
import './CollectionItem.css'
import { CarContext } from '../../context/CarContext'

const CollectionItem = ({ id, name, description, price, image}) => {
    const { url } = useContext(CarContext)
    return (
        <div className='collection-item' id={id}>
            <img src={url + "/images/" + image} alt="" />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <button><span>MORE DETAIL</span></button>
        </div>
    )
}

export default CollectionItem