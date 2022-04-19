import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal } from 'react-bootstrap';
import Addlivreur from './Add_livreur';
import Updatelivreur from './Update_livreur';
import Swal from 'sweetalert2'




function Show_livreur() {

  const baseURL = "http://localhost:3000/api/livreurs";

  let [livreurs, set_livreurs] = useState([])
  const [livreur, set_livreur] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));
   

 
  async function getDAta(){

     await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) =>{
      // console.log(res);
console.log(res.data.livreur);
      set_livreurs(res.data.livreur)
      // console.log(res);
    })
    }


  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:3000/api/livreurs/${id}`,  { headers: {"Authorization" : `Bearer ${token}`} } ).then(() => {
    
      Swal.fire(
        'Good job!',
        'You delete a deliver!',
        'success'
        )
        set_livreurs(null)
      
  })
  }

  

 useEffect( () => {
  getDAta()
  }, [Update, livreur]);

  
  const handleUpdate = (livreur) => {
    set_livreur(livreur)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);


        
          

       const data = livreurs.map((livreur,index) => {
    
            return(
                  
              <tr key={index}>
                <td > <p>{livreur._id}</p> </td>
                <td > <p>{livreur.name}</p> </td>
                <td > <p>{livreur.email}</p> </td>
                <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(livreur)}>
                      <GrIcons.GrUpdate size="10"  />
                    </Button></td>
                <td><Button size="sm"  variant="danger" onClick={()=> deleteData(livreur._id)}>
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
      <th scope="col">Email</th>
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
          <Modal.Title>Add livreur</Modal.Title>
        </Modal.Header>

        <Addlivreur />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Add livreur</Modal.Title>
        </Modal.Header>

        <Updatelivreur data={livreur} close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Show_livreur
