
import React, { useState } from 'react';
import jwt_decode from "jwt-decode";

import { Link, } from 'react-router-dom';
import './styles.modules.css';
import  axios  from 'axios' ;

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password:"",
      
      });
     
      const [error, setError] = useState("") 


      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url ="http://localhost:3000/api/auth/login"; 
          const response = await axios.post(url, data);
          console.log(response.data.accessToken);
          const user = jwt_decode(response.data.accessToken);
          localStorage.setItem("name", JSON.stringify(response.data.accessToken))
          if(user.role==="client"){
            window.location = "/" 
        
          }if(user.role==="admin" || "chef_secteur"){
            window.location = "/dashboard" 
         
          }
      
          } catch (error) {
          if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500 
          ){
            setError(error.response.data.message)

          }
        }
      }
  return (
    <div className="login_container" >
       <div className="login_form_container">
         <div className="left">
         <form className="form_container" onSubmit={handleSubmit}>
         <h1>Login to MoroccoDelivery</h1>
           
            <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={data.email}
            required
            className="input"
            />
           <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className="input"
            />
          {error && <div className="error_msg"> (errror)</div>}

          <button type="submit" className="green_btn">
            Login
          </button>
         </form>
         </div>
         <div className="right"></div>
           <h1>New Here?</h1>
           <Link to="/register" >
             <button type='button' className= "white_btn">
                Sign In
             </button>
           </Link>
       </div>
    </div>
  )
}
export default Signup;
