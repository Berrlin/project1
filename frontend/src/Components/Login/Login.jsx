// import React, { useContext, useState } from 'react'
// import './Login.css'
// import { CarContext } from '../../context/CarContext'
// import axios from 'axios'
// import cross_icon from '../../assets/cross_icon.png'

// const Login = ({ setShowLogin }) => {

//     const{url, setToken} = useContext(CarContext)
//     const [currState, setCurrState] = useState("Login")
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })
//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }
    

//     const onLogin = async (event) => {
//         event.preventDefault();
//         let newUrl = url;
//         if (currState === "Login") {
//             newUrl += "/api/user/login"
//         } else {
//             newUrl += "/api/user/register"
//         }
//         const response = await axios.post(newUrl, data);
//         if (response.data.success) {
//             setToken(response.data.token);
//             localStorage.setItem("token", response.data.token);
//             setShowLogin(false)
//         } else {
//             alert(response.data.messega)
//         }
//     }



//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}

//                     <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//                     <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//                 </div>
//                 <button type='Submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, i agree to the terms of use & privacy policy</p>
//                 </div>
//                 {currState === "Login" ? <p>Create a new account <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
//                     : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
//             </form>
//         </div>
//     )
// }

// export default Login

import React, { useContext, useState } from 'react';
import './Login.css';
import { CarContext } from '../../context/CarContext';
import axios from 'axios';
import cross_icon from '../../assets/cross_icon.png';

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(CarContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(""); // Thêm trạng thái cho thông báo lỗi

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setError(""); // Xóa thông báo lỗi trước khi thực hiện yêu cầu mới
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        setError(response.data.message); // Cập nhật thông báo lỗi từ server
      }
    } catch (error) {
      setError("An error occurred during login. Please try again."); // Cập nhật thông báo lỗi nếu có lỗi
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder='Your email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder='Password'
            required
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Hiển thị thông báo lỗi nếu có */}
        <button type='Submit'>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
