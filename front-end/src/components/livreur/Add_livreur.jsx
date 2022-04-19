import React, {useState} from 'react'
import axios from 'axios'
import './livreur.css'
import Swal from 'sweetalert2'


function Add_livreur() {

  const baseURL = 'http://localhost:3000/api/livreurs'
  const [add_livreurs, set_addlivreurs] = useState({
    email: "",
    name:"",
    password:"",
  
  })
  console.log(add_livreurs.email, add_livreurs.name, add_livreurs.password);

  const [error, setError] = useState("") 
  const token = JSON.parse(localStorage.getItem('name'));

  
 


  function handleChange({ currentTarget: input }) {
    set_addlivreurs({ ...add_livreurs, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post(baseURL,  add_livreurs, { headers: {"Authorization" : `Bearer ${token}`} }).then(

        window.location = "/dashboard/livreurs" ,
        setTimeout(() => {
          Swal.fire(
            'Good job!',
            'You add a deliver!',
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
            onChange={handleChange}
            value={add_livreurs.email}
            required className="form-control" id="inputEmail" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Password</label>
      <input  type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={add_livreurs.password}
            required className="form-control" id="inputPassword" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Name</label>
    <input type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={add_livreurs.name}
            className="form-control" id="inputName" />
  </div>

  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_livreur
