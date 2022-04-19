import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import Adduser from './Add_user';
import Updateuser from './Update_user';




function Show_user() {

  const baseURL = "http://localhost:3000/api/users";

  let [users, setusers] = useState([])
  const [user, set_user] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){

    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli.data){
      setusers(cli.data.users);
    }
    }

  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:3000/api/users/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
    
      alert("Post deleted!");
      setusers(null)
  })
  }


 useEffect( () => {
  getDAta()
  }, [Update, user]);

  
  const handleUpdate = (user) => {
    set_user(user)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

  if(!users) return <div className="add-no"> no chefs  <Button size="sm"  className='add-button mt-2' variant="primary" onClick={handleAdd}>
  <BiIcons.BiUserPlus size="20"  />

      </Button></div> 


const data = users.map((user, index) => {
  return(

    <tr key={index}>
      <td > <p>{user._id}</p> </td>
      <td > <p>{user.name}</p> </td>
      <td > <p>{user.email}</p> </td>
      <td > <p>{user.role}</p> </td>

      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(user)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(user._id)}>
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
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <Adduser />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <Updateuser data={user} close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Show_user