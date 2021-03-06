import { useState} from 'react'
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2'


function Update_chefs({data,Close}) {  
  
  
  
  const [chefs, set_chefs] = useState(
    data
    
    );
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:3000/api/chefsecteur`
    const [error, setError] = useState("") 

  
      const updatechef =(e)=>{
          e.preventDefault();

          try{

            axios.put(`${baseURL}/${chefs._id}`, chefs, { headers: {"Authorization" : `Bearer ${token}`, 'content-type': 'application/json'} }).then((res) => {
                
              Swal.fire(
                'Done !',
                'You update a chef!',
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
    
      const handelInput =({ currentTarget: input })=>{
  
          set_chefs({...chefs, [input.name] : input.value})
          console.log(chefs)
      }

  
    
  
  
    if (!chefs) return "No chef!"

  return (

    



    <>
     <form className="p-2"  onSubmit={updatechef}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput} name="email"  className="form-control" value={chefs.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput} name="password"  className="form-control" value={chefs.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput} name="name"  className="form-control" value={chefs.name}  />
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput} name="secteur"  className="form-control" value={chefs.secteur}  />
  </div>

  {error && <div className="error_msg"> (errror)</div>}
 

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_chefs
