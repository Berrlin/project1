// import React, { useContext, useState } from 'react'
// import './Collection.css'
// import Navbar from '../../Components/Navbar/Navbar'
// import Login from '../../Components/Login/Login'
// import { CarContext } from '../../context/CarContext'
// import CarItem from '../../Components/CarItem/CarItem'
// import CollectionItem from '../../Components/CollectionItem/CollectionItem'
// import Category from '../../Components/Category/Category'

// const Collection = ({category}) => {
//     const [showLogin, setShowLogin] = useState(false);
//     const { carList } = useContext(CarContext)
//     return (
//         <div>
//             {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
//             <Navbar setShowLogin={setShowLogin} />
//             <div className='collection'>
//                 <div className="collection-content">
//                     <h1>Collection</h1>
//                     <p>Offering you a wide range of choices from car a compact city car, a family car or a pickup truck, Mitsubishi is sure to meet your needs.</p>
//                 </div>
//                 <Category/>
//                 <div className="collection-list">
//                     {carList.map((item) => {
//                         return <CollectionItem key={item._id} id={item._id}
//                         name={item.name}
//                         description={item.description}
//                         price={item.price}
//                         image={item.image} />
                        
//                     })}
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Collection


import React, { useContext, useState } from 'react'
import './Collection.css'
import Navbar from '../../Components/Navbar/Navbar'
import Login from '../../Components/Login/Login'
import { CarContext } from '../../context/CarContext'
import CollectionItem from '../../Components/CollectionItem/CollectionItem'
import Category from '../../Components/Category/Category'

const Collection = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { carList } = useContext(CarContext)
    const [category, setCategory] = useState("All");

    const filteredCars = category === "All" ? carList : carList.filter(car => car.category === category);

    return (
        <div>
            {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
            <Navbar setShowLogin={setShowLogin} />
            <div className='collection'>
                <div className="collection-content">
                    <h1>Collection</h1>
                    <p>Offering you a wide range of choices from car a compact city car, a family car or a pickup truck, Mitsubishi is sure to meet your needs</p>
                </div>
                <Category category={category} setCategory={setCategory} />
                <div className="collection-list">
                    {filteredCars.map((item) => {
                        return <CollectionItem key={item._id} id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Collection
