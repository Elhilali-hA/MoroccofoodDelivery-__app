import React, {useState} from 'react'
import axios from 'axios'
import './Users.css'
import Swal from 'sweetalert2'


function Add_user() {

  const baseURL = 'http://localhost:3000/api/users'
  const [Add_users, set_addusers] = useState({
    email: "",
    name:"",
    password:"",
    role:""
  })

  const token = JSON.parse(localStorage.getItem('name'));


  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addusers({ ...Add_users, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseURL, Add_users,  { headers: {"Authorization" : `Bearer ${token}`} }).then(

        window.location = "/dashboard/users" ,
        setTimeout(() => {
          Swal.fire(
            'Good job!',
            'You add a user!',
            'success'
          )
          
          
        }, 1000)
        )
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
    <>
    <form className="p-2" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email"
            placeholder='Email'
            name='email'
            onChange={handleChage}
            value={Add_users.email}
            required className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Password</label>
      <input  type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={Add_users.password}
            required className="form-control" id="inputPassword4" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Name</label>
    <input type="text"
            name="name"
            placeholder="Name"
            onChange={handleChage}
            value={Add_users.name}
            className="form-control"  />
  </div>
 
  <div className="form-row">
    
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Role</label>
      <input  type="text"
            placeholder="role"
            name="role"
            onChange={handleChage}
            value={Add_users.role}
            required className="form-control" id="inputPassword4" />
    </div>

  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_user
