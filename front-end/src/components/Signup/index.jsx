
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import  './styles.modules.css';
import  axios  from 'axios' ;
const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password:""
      });
      const history = useHistory(); 
      const [error, setError] = useState("") 


      const handleChage = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url ="http://localhost:3000/api/auth/register"; 
          const { data: res } = await axios.post(url, data );
          history.push("/login")
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

    <div className="signup_container" >
       <div className="signup_form_container">
         <div className="left">
           <h1>Welcome</h1>
           <Link to="/login" >
             <button type='button' className= "white_btn">
                Sign in
             </button>
           </Link>
         </div>
         <div className="right"></div>
         <form className="form_container" onSubmit={handleSubmit}>
         <h1>Create Account</h1>
            <input
            type="text"
            placeholder='name'
            name='name'
            onChange={handleChage}
            value={data.lastName}
            required
            className="input"
            />
            <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleChage}
            value={data.email}
            required
            className="input"
            />
            <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={data.password}
            required
            className="input"
            />
          {error && <div className="error_msg"> (errror)</div>}

          <button type="submit" className="green_btn">
            Sign Up
          </button>
         </form>
       </div>
    </div>
  )
}
export default Signup;
