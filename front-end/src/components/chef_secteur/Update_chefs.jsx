import { useState} from 'react'
import axios from "axios";
import React from "react";

function Update_chefs({data,Close}) {  
  
  
  
  const [chefs, set_chefs] = useState(
    data
    
    );
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:3000/api/chefs`
  
      const updatechef =(e)=>{
          e.preventDefault();
          axios.put(`${baseURL}/${chefs._id}`, chefs, { headers: {"Authorization" : `Bearer ${token}`} }).then((response) => {
              console.log(response);
              Close();
          });
     
         
      }
    
      const handelInput =(e)=>{
  
          set_chefs({...chefs, [e.target.name] : e.target.value})
          console.log(chefs)
      }

  
    
  
  
    if (!chefs) return "No chef!"

  return (

    



    <>
     <form className="p-2"  onSubmit={updatechef}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput}  className="form-control" value={chefs.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput}  className="form-control" value={chefs.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput}  className="form-control" value={chefs.name}  />
  </div>
 

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_chefs
