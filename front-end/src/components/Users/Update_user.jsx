import { useState} from 'react'
import axios from "axios";
import React from "react";

function Update_users({data,Close}) {  
  
  
  
  const [users, set_users] = useState(
    data
    
    );
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:3000/api/users`
  
      const updateuser =(e)=>{
          e.preventDefault();
          axios.put(`${baseURL}/${users._id}`, users, { headers: {"Authorization" : `Bearer ${token}`} }).then((response) => {
              console.log(response);
              Close();
          });
     
         
      }
    
      const handelInput =(e)=>{
  
          set_users({...users, [e.target.name] : e.target.value})
          console.log(users)
      }

  
    
  
  
    if (!users) return "No user!"

  return (

    



    <>
     <form className="p-2"  onSubmit={updateuser}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput}  className="form-control" value={users.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput}  className="form-control" value={users.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput}  className="form-control" value={users.name}  />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="role">Role</label>
      <input type="text" onChange={handelInput}  className="form-control" value={users.role}  />
    </div>

  </div>

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_users
