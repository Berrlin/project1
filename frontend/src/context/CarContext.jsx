import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CarContext = createContext(null);

const CarContextProvider = (props) => {
  const [carList, setCarList] = useState([]);
  const [sportcar,setSportCar] = useState([])
  const[token,setToken] =useState("");

  const url = 'https://project1-backend-io07.onrender.com';

  const fetchList = async () => {
    try {
      const response = await axios.get(url + '/api/car/list');
      setCarList(response.data.data);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  const fetchCarSportList = async()=>{
    try {
      const response = await axios.get(url+'/api/car/sportcar');
      setSportCar(response.data.data)
    } catch (error) {
      console.log("Error fetching sport car",error)
    }
  }

  const login = async (username, password) => {
    try {
      const response = await axios.post(url + '/api/user/login', { username, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    fetchList();
    fetchCarSportList();
  }, []);

  const contextValue ={
    carList,
    url,
    sportcar,
    login,
    token,
    setToken
  }



  return (
    <CarContext.Provider value={contextValue}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
