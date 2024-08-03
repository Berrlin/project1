import React, { useEffect, useState } from 'react'
import './Add.css'
import upload from '../../assets/upload.png'
import axios from 'axios'
import { toast } from "react-toastify"

const Add = ({ url }) => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Sport",
    price: ""
  })
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/car/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Sport",
        price: ""
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }

  }

  return (

    <div className='add'>
      <form onSubmit={onSubmitHandler} action="flex-col">
        <div className="add-image flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : upload} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} id='image' hidden required type="file" />
        </div>
        <div className="addname flex-col">
          <p>Name</p>
          <input onChange={HandleChange} value={data.name} type="text" name='name' placeholder='Enter Car Name' required/>
        </div>
        <div className="adddesc flex-col">
          <p>Description</p>
          <textarea onChange={HandleChange} value={data.description} name="description" rows={6} placeholder='Enter Car Description' required></textarea>
        </div>
        <div className="add-price-category">
          <div className="add-price flex-col">
            <p>Price</p>
            <input onChange={HandleChange} value={data.price} type="Number" name='price' placeholder='Enter Price' required/>
          </div>
          <div className="add-category flex-col">
            <p>Category</p>
            <select onChange={HandleChange} value={data.onChange} name="category" required>
              <option value="Sport">Sport</option>
              <option value="SUV">SUV</option>
              <option value="Basic">Basic</option>
              <option value="Sedan">Sedan</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>
        <button type='Submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add