import { useState} from 'react'
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2';

function Update_users({data, Close}) {  
  
  
  
  const [users, set_users] = useState(
   data
    
    );

    const [error, setError] = useState("") 

    
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:3000/api/users`
    
      const updateuser =(e)=>{
          e.preventDefault();
          try{

            axios.put(`${baseURL}/${users._id}`, users, { headers: {"Authorization" :  `Bearer ${token}`, 'content-type': 'application/json'}  }).then((res) => {
                
              Swal.fire(
                'Done !',
                'You update a user!',
                'success'
                )
                Close();
            });
          }catch (error) {
            if (error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500 
            ){
              setError(error.response.data.message)
      
            }
          }
         
      }
    
      const handelInput = ({ currentTarget: input })=>{
  
          set_users({ ...users, [input.name] : input.value})
          console.log(users)
      }

    if (!users) return "No user!"

  return (

    <>
     <form className="p-2"  onSubmit={updateuser}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput} name="email"  className="form-control" value={users.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput} name="password"  className="form-control" value={users.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput} name="name"  className="form-control" value={users.name}  />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="role">Role</label>
      <input type="text" onChange={handelInput} name="role"  className="form-control" value={users.role}  />
    </div>

  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit"  className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_users
