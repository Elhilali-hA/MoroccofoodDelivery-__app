import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import './restaurant.css'
import { Button, Modal,  } from 'react-bootstrap';
import Addrestau from './Add_restau';
import Updaterestau from './Update_restau';
import Swal from 'sweetalert2'




function Show_restau() {
  const baseURL = "http://localhost:3000/api/restaurants";

  let [restaurant, setrestaurant] = useState([])
  const [restau, set_restau] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){
    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
        setrestaurant(cli.restaurants);
        
        
    }
    }

  const deleteData = (id, e) =>{   
     Swal.fire({
        title: 'are you sure?',
        showDenyButton: true,
        confirmButtonText: "Yes, i'm sure",
      denyButtonText: `No, don't save`,
      }
      ).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/api/restaurants/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
          const newrestaurant = restaurant.filter(restau => restau._id !== id)
          setrestaurant(newrestaurant)
         
            
      })
          Swal.fire('restau Deleted!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  }

 useEffect( () => {
  getDAta()
  }, [Update, restau]);

  const handleUpdate = (restau) => {
    set_restau(restau)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);



const data = restaurant.map((restau, index) => {
  return(
    <tr key={index}>
      <td > <p>{restau._id}</p> </td>
      <td > <p>{restau.title}</p> </td>
      <td > <p>{restau.description}</p> </td>
      <td > <img id="iconimage" src={'http://localhost:3000/restaurants/'+ restau.restaurantImage} alt="" /> </td>
      <td > <p>{restau.address}</p> </td>
      <td > <p>{restau.city}</p> </td>
      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(restau)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(restau._id)}>
            <BsIcons.BsFillTrashFill size="10"  />
          </Button></td>

          
  </tr> 
  )
})


  return (
    <>
    <table className="table table-striped">
  <thead>
    <tr>
    
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">Image</th>
      <th scope="col">address</th>
      <th scope="col">city</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
      <th scope="col">
      <Button size="sm"  className='add-button' variant="primary" onClick={handleAdd}>
            <BiIcons.BiUserPlus size="20"  />
          </Button>
      </th>

    </tr>
  </thead>
  <tbody>
    
    {data}
   
     
  </tbody>
</table>

      <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add restaurant</Modal.Title>
        </Modal.Header>

        <Addrestau Close={handleClose}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Update restau</Modal.Title>
        </Modal.Header>

        <Updaterestau data={restau}  Close={handleCloseU}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Show_restau
