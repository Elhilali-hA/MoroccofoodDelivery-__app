import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'



function Add_chef({Close}) {

  const baseURL = 'http://localhost:3000/api/chefsecteur'
  const [Add_chefs, set_addchefs] = useState({
    email: "",
    name:"",
    password:"",
    secteur: ""
  })

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addchefs({ ...Add_chefs, [input.name]: input.value });
  };

  const token = JSON.parse(localStorage.getItem('name'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }
      ).then((result) => {
        if (result.isConfirmed) {
          axios.post(baseURL, Add_chefs,  { headers: {"Authorization" : `Bearer ${token}`} }).then(
            Close()
         )
          Swal.fire('Saved!', '', 'success')

          window.location.reload()
        } else if (result.isDenied) {
          Close();
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
 
    
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
            value={Add_chefs.email}
            required className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Password</label>
      <input  type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={Add_chefs.password}
            required className="form-control" id="inputPassword4" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Name</label>
    <input type="text"
            name="name"
            placeholder="Name"
            onChange={handleChage}
            value={Add_chefs.name}
            className="form-control"  />
  </div>
 
  <div className="form-row">
  <label htmlFor="inputAddress">Name</label>
    <input type="text"
            name="secteur"
            placeholder="scteur"
            onChange={handleChage}
            value={Add_chefs.secteur}
            className="form-control"  />

  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_chef
