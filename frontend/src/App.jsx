import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Collection from './Pages/Collection/Collection'


const App = () => {

  

  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App