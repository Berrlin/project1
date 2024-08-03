import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Update.css';

const UpdateCar = ({ url }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state;
  const [name, setName] = useState(car.name);
  const [description, setDescription] = useState(car.description);
  const [price, setPrice] = useState(car.price);
  const [category, setCategory] = useState(car.category); // Added state for category

  const updateCarDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/api/car/update`, {
        id: car._id,
        name,
        description,
        price,
        category // Include category in the request
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/list');
      } else {
        toast.error("Error updating car");
      }
    } catch (error) {
      toast.error("Error updating car");
    }
  };

  return (
    <div className='update-car'>
      <h2>Update Car</h2>
      <form onSubmit={updateCarDetails}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <br />
          <textarea rows={4} cols={70}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label> {/* New input for category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Sport">Sport</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Basic">Basic</option>
            <option value="Van">Van</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateCar;
