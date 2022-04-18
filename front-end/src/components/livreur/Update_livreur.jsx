import { useState, useEffect} from 'react'
import axios from "axios";
import React from "react";

function Update_Livreurs({data,Close}) {  
  
  
  
  const [Livreurs, set_Livreurs] = useState(
    data
    
    );
    
    const baseURL = `http://localhost:3000/api/livreurs/`
  
      const updateLivreur =(e)=>{
          e.preventDefault();
          axios.put(`${baseURL}/${Livreurs._id}`, Livreurs).then((response) => {
              console.log(response);
              Close();
          });
     
         
      }
    
      const handelInput =(e)=>{
  
          set_Livreurs({...Livreurs, [e.target.name] : e.target.value})
          console.log(Livreurs)
      }

  

  return (

    <>
     <form className="p-2"  onSubmit={updateLivreur}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput}  className="form-control" value={Livreurs.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput}  className="form-control" value={Livreurs.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput}  className="form-control" value={Livreurs.name}  />
  </div>

  

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_Livreurs