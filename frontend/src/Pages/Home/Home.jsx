import React, {useState} from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import New from '../../Components/New/New'
import Sport from '../../Components/Sport/Sport'
import Address from '../../Components/Address/Address'
import Navbar from '../../Components/Navbar/Navbar'
import Login from '../../Components/Login/Login'

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (

        <div className='home'>
            {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
            <Navbar setShowLogin={setShowLogin} />
            <Hero />
            <hr />
            <New />
            <hr />
            <Sport category="Sport" />
            <hr />
            <Address />
        </div>
    )
}

export default Home