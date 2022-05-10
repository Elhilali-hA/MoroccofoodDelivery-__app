import { useState, useEffect} from 'react'
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2'


function Update_Livreurs({data,Close}) {  
  
  
  
  const [Livreurs, set_Livreurs] = useState(
    data
    
    );

    const [error, setError] = useState("") 

  const token = JSON.parse(localStorage.getItem('name'));

    
    const baseURL = `http://localhost:3000/api/livreurs/`
  
      const updateLivreur =(e)=>{
          e.preventDefault();
          try{

            axios.put(`${baseURL}/${Livreurs._id}`, Livreurs, { headers: {"Authorization" :  `Bearer ${token}`, 'content-type': 'application/json'}  }).then((res) => {
                
              Swal.fire(
                'Done !',
                'You update a livreur!',
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
      <input type="email" onChange={handelInput} name="email"  className="form-control" value={Livreurs.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput} name="password" className="form-control" value={Livreurs.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput} name="name"  className="form-control" value={Livreurs.name}  />
  </div>

  {error && <div className="error_msg"> (errror)</div>}
  

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_Livreurs