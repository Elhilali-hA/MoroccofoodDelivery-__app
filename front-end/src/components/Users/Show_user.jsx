import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import Adduser from './Add_user';
import Updateuser from './Update_user';
import Swal from 'sweetalert2'




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

    // const total = collectusers(users)


    console.log(users.length)
    

  const deleteData = (id, e) =>{
    
     Swal.fire({
        title: 'are you sure?',
        showDenyButton: true,
        confirmButtonText: "Yes, i'm sure",
      denyButtonText: `No, don't save`,
      }
      ).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/api/users/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
          
          const newusers = users.filter(user => user._id != id)
          setusers(newusers)
         
            
      })
          Swal.fire('User Deleted!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
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

  const countusers = (user) =>{
    return users.length
  }



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
      </Modal>
      
    </>
  )
}



export default Show_user
