// import React, { useEffect, useState } from 'react'
// import './List.css'
// import update from '../../assets/update.png'
// import delete_icon from '../../assets/delete.png'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import {NavLink} from 'react-router-dom'

// const List = ({ url }) => {
//   const [list, setList] = useState([])


//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/car/list`)
//     if (response.data.success) {
//       setList(response.data.data)
//     }
//     else {
//       toast.error("Error")
//     }
//     console.log(list)
//   }

//   const removeCar = async (carId) => {
//     const response = await axios.post(`${url}/api/car/remove`, { id: carId })
//     await fetchList()
//     if (response.data.success) {
//       toast.success(response.data.message)
//     } else {
//       toast.error("Error")
//     }
//   }

//   useEffect(() => {
//     fetchList();
//   }, [])
//   return (
//     <div className='list'>
//       <p>All Car List</p>
//       <div className="list-top">
//         <div className="list-top-title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Description</b>
//           <b>Price</b>
//           <b>Update</b>
//           <b>Delete</b>
//         </div>
//         {list.map((item, index) => {
//           return (
//             <div key={index} className='list-top-format'>
//               <img src={`${url}/images/` + item.image} alt="" />
//               <p>{item.name}</p>
//               <p>{item.description}</p>
//               <p>{item.price}</p>
//               <NavLink to={`/update/${item._id}`}><img src={update} alt="" /></NavLink>
//               {/* <NavLink to={'/update'}><img src={update} alt="" /></NavLink> */}
//               <img src={delete_icon} onClick={() => removeCar(item._id)} className='delete cursor' alt="" />
//               {/* <p className='cursor' onClick={()=>removeCar(item._id)}>X</p> */}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default List

import React, { useEffect, useState } from 'react'
import './List.css'
import update from '../../assets/update.png'
import delete_icon from '../../assets/delete.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const List = ({ url }) => {
  const [list, setList] = useState([])
  const navigate = useNavigate()

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/car/list`)
      if (response.data.success) {
        setList(response.data.data)
      } else {
        toast.error("Error")
      }
    } catch (error) {
      toast.error("Error fetching list")
    }
  }

  const removeCar = async (carId) => {
    try {
      const response = await axios.post(`${url}/api/car/remove`, { id: carId })
      await fetchList()
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error("Error")
      }
    } catch (error) {
      toast.error("Error removing car")
    }
  }

  const updateCar = (car) => {
    navigate('/update', { state: { car } })
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='list'>
      <p>All Car List</p>
      <div className="list-top">
        <div className="list-top-title">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Price</b>
          <b>Update</b>
          <b>Delete</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-top-format'>
            <img src={`${url}/images/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img
              src={update}
              alt=""
              onClick={() => updateCar(item)}
              className='cursor'
            />
            <img
              src={delete_icon}
              onClick={() => removeCar(item._id)}
              className='delete cursor'
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
