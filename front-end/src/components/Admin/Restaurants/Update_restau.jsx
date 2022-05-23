import { useState} from 'react'
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2';

function Update_restaurants({data, Close}) {  
  
  
  
  const [restaurants, set_restaurants] = useState(
   data
    
    );

    const [error, setError] = useState("") 

    
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:3000/api/restaurants/up`
    
      const updaterestaurant =(e)=>{
          e.preventDefault();
          try{

            axios.put(`${baseURL}/${restaurants._id}`, restaurants, { headers: {"Authorization" :  `Bearer ${token}`, 'content-type': 'application/json'}  }).then((res) => {
                
              Swal.fire(
                'Done !',
                'You update a restaurant!',
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
  
          set_restaurants({ ...restaurants, [input.name] : input.value})
          console.log(restaurants)
      }

    if (!restaurants) return "No restaurant!"

  return (

    <>
     <form className="p-2"  onSubmit={updaterestaurant}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="title">title</label>
      <input type="text" onChange={handelInput} name="title"  className="form-control" value={restaurants.title}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="description">description</label>
      <input type="text" onChange={handelInput} name="description"  className="form-control" value={restaurants.description} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Image">Image</label>
    <input type="file" onChange={handelInput} name="restaurantImage"  className="form-control" value={restaurants.restaurantImage}  />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="address">address</label>
      <input type="text" onChange={handelInput} name="address"  className="form-control" value={restaurants.address}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="city">city</label>
      <input type="text" onChange={handelInput} name="city"  className="form-control" value={restaurants.city} />
    </div>

  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit"  className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_restaurants
