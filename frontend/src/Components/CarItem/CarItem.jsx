import React, { useContext } from 'react';
import './CarItem.css';
import { CarContext } from '../../context/CarContext'

const CarItem = ({ id, name, description, price, image }) => {
  const{url} =useContext(CarContext)
  return (
    <div className='car-item' id={id}>
      <div className="car-item-image-wrapper">
        <img src={url + "/images/" + image} alt={name} className="car-item-image" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Price: ${price}</h3>
    </div>
  );
};

export default CarItem;



