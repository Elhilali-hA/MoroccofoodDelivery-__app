import React, { useState, useEffect } from 'react'
import axios from "axios";
import jwt_decode from "jwt-decode";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
// import Adduser from './Add_user';
// import Updateuser from './Update_user';
import Swal from 'sweetalert2'




function Show_user() {

  const baseURL = "http://localhost:3000/api/profile";

  let [user, setuser] = useState([])
//   const [user, set_user] = useState();
//   const [Add, setAdd] = useState(false);
//   const [Update, setUpdate] = useState(false);
//   const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));
  const users = jwt_decode(token);


  
  async function getDAta(){

    console.log(users._id);
    let res = await axios.get(`${baseURL}/${users._id}`, { headers: {"Authorization" : `Bearer ${token}`, 'content-type' : 'application/json'} })
    let cli = await res.data
    if(cli.data){
      setuser(cli.data.user);
      console.log(cli.data.user);
    }
    }



 useEffect( () => {
  getDAta()
  }, []);

  
//   const handleUpdate = (user) => {
//     set_user(user)
//     setUpdate(true)
//     };

//   const handleClose = () => setAdd(false);
//   const handleAdd = () => setAdd(true);



const data = user.map((users, index) => {
  return(

    <tr key={index}>
      <td > <p>{users._id}</p> </td>
      <td > <p>{users.name}</p> </td>
      <td > <p>{users.email}</p> </td>
      <td > <p>{users.role}</p> </td>

      {/* <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(user)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(user._id)}>
            <BsIcons.BsFillTrashFill size="10"  />
          </Button></td> */}
  
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
      {/* <Button size="sm"  className='add-button' variant="primary" onClick={handleAdd}>
            <BiIcons.BiUserPlus size="20"  />
          </Button> */}
      </th>

    </tr>
  </thead>
  <tbody>
    
    {data}
   
     
  </tbody>
</table>

      {/* <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <Adduser Close={handleClose}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>

        <Updateuser data={user}  Close={handleCloseU}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal> */}
      
    </>
  )
}

export default Show_user
