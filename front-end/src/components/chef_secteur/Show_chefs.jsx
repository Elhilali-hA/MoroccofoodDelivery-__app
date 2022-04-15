import { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal } from 'react-bootstrap';
import Addchef from './Add_chefs';
import Updatechef from './Update_chefs';




function Show_chef() {

  const baseURL = "http://localhost:3000/api/chef_secteur";

  let [chefs, setchefs] = useState([])
  const [chef, set_chef] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


 
  async function getDAta(){

    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli.data){
      setchefs(cli.data.chefs);
    }
    }


  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:3000/api/chef_secteur/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
    
      alert("Post deleted!");
      setchefs(null)
  })
  }


 useEffect( () => {
  getDAta()
  }, [Update, chef]);

  
  const handleUpdate = (chef) => {
    set_chef(chef)
    setUpdate(true)
    };

   

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

  if(!chefs) return <div className="add-no"> no chefs  <Button size="sm"  className='add-button mt-2' variant="primary" onClick={handleAdd}>
  <BiIcons.BiUserPlus size="20"  />

      </Button></div> 


const data = chefs.map((chef, index) => {
  return(

    <tr key={index}>
      <td > <p>{chef._id}</p> </td>
      <td > <p>{chef.name}</p> </td>
      <td > <p>{chef.email}</p> </td>
      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(chef)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(chef._id)}>
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
      <Button size="sm"  className='menu-bars' variant="primary" onClick={handleAdd}>
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
          <Modal.Title>Add chef</Modal.Title>
        </Modal.Header>

        <Addchef />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Add chef</Modal.Title>
        </Modal.Header>

        <Updatechef data={chef} close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Show_chef
