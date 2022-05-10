import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


function Add_restau({Close}) {

  const baseURL = 'http://localhost:3000/api/restaurants'
  const [Add_restau, set_addrestau] = useState({
    title: "",
    description: "",
    address:"",
    restaurantImage:"",
    city:""
  })

  //  function createCategorys(name, image) {
  //   // console.log("getAllcategory");
  
  //   const formData = new FormData();
  
  //   formData.append("image", image, image.name);
  
  //   formData.append("name", name);
  
  //   console.log("formData : ", formData.get("image"));
  
  //   return axios.post(baseURL , formData);
  // }


  const token = JSON.parse(localStorage.getItem('name'));

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addrestau({ ...Add_restau, [input.name]: input.value });
  };

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
              axios.post(baseURL, Add_restau,  { headers: {"Authorization" : `Bearer ${token}`} }).then(
                // Close()
             )
              Swal.fire('Saved!', '', 'success')

              // window.location.reload()
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
    <form className="p-2" onSubmit={handleSubmit} enctype="multipart/form-data">
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="inputtitle">Name</label>
      <input type="title"
            placeholder='title'
            name='title'
            onChange={handleChage}
            value={Add_restau.title}
            required className="form-control" id="inputtitle" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputdescription">Description</label>
      <input  type="description"
            placeholder="description"
            name="description"
            onChange={handleChage}
            value={Add_restau.description}
            required className="form-control" id="inputdescription" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputImage">Image</label>
    <input type="file"
            name="restaurantImage"
            placeholder="Name"
            onChange={handleChage}
            value={Add_restau.restaurantImage}
            className="form-control"  />
  </div>
 
  <div className="form-row">
    
    <div className="form-group col-md-3">
      <label htmlFor="inputaddress">Address</label>
      <input  type="text"
            placeholder="address"
            name="address"
            onChange={handleChage}
            value={Add_restau.address}
            required className="form-control" id="inputaddress" />
    </div>

    <div className="form-group">
    <label htmlFor="inputAddress">city</label>
    <input type="text"
            name="city"
            placeholder="city"
            onChange={handleChage}
            value={Add_restau.city}
            className="form-control"  />
  </div>



  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_restau
