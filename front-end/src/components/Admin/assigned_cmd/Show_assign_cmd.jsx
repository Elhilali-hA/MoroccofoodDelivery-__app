import React, {useState, useEffect} from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Add_assigned_cmd from './Add_assigned'

const Show_cmd = () => {
  
    const baseURL = "http://localhost:3000/api/assigned_commandes";

    let [asignedcmd, set_asignedcmd] = useState([])
    const [command, set_command] = useState();
    const [Add, setAdd] = useState(false);
    const [Update, setUpdate] = useState(false);
    // const handleCloseU = () => setUpdate(false);
    const token = JSON.parse(localStorage.getItem('name'));
     
  
   
    async function getDAta(){
  
       await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) =>{
        
        set_asignedcmd(res.data.assigned_cmd)
        
        
      })
      }
  
  
    // const deleteData = (id, e) =>{
  
    //   Swal.fire({
    //     title: 'are you sure?',
    //     showDenyButton: true,
    //     confirmButtonText: "Yes, i'm sure",
    //     denyButtonText: `No, don't save`,
    //   }
    //   ).then((result) => {
    //     if (result.isConfirmed) {
    //       axios.delete(`http://localhost:3000/api/commandes/${id}`,  { headers: {"Authorization" : `Bearer ${token}`} } ).then(() => {
          
    //       const newasignedcmd = asignedcmd.filter(command => command._id != id)
    //       set_asignedcmd(newasignedcmd)
         
            
    //   })
    //       Swal.fire('Saved!', '', 'success')
    //     } else if (result.isDenied) {
    //       Swal.fire('Changes are not saved', '', 'info')
    //     }
    //   })
  
    // }
  
    
  
   useEffect( () => {
    getDAta()
    }, []);
  
    
    const handleUpdate = (command) => {
       set_command(command)
       setUpdate(true)
       };
  
     const handleClose = () => setAdd(false);
     const handleAdd = () => setAdd(true);
  
  
          
            
    
    const data = asignedcmd.map((cmd,index) => {
           
       
      function status(){
        if (cmd.status === 'Pending') {
        return  <td className="bg bg-warning"> <p className="text-white">{cmd.status}</p> </td>
          }
          if (cmd.status === 'road to deliver') {
            return <td className="bg bg-secondary"> <p className="text-white">{cmd.status}</p> </td>
          }
          if (cmd.status === 'Delivered') {
            return <td className="bg bg-success"> <p className="text-white">{cmd.status}</p> </td>

          }
      }
            return(

                
                    
                <tr key={index}>
                  <td > <p>{cmd._id}</p> </td>
                  <td > <p>{cmd.command_id.id}</p> </td>
                  <td > <p>{status()}</p> </td>
                  <td > <p>{cmd.livreur_id.name}</p> </td>
                  <td > <p>{cmd.created_at}</p> </td>

                  <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(command)}>
                        <GrIcons.GrUpdate size="10"  />
                      </Button></td>
                      {/* <td><Button size="sm"  variant="danger" onClick={()=> deleteData(command._id)}>
                        <BsIcons.BsFillTrashFill size="10"  />
                      </Button></td>  */}
              </tr> 
              )
            })
              
            
        
  
  
  
    return (
      <>
      <table className="table table-striped">
    <thead>
      <tr>
        
      
        <th scope="col">#</th>
        <th scope="col">commande</th>
        <th scope="col">Statut</th>
        <th scope="col">Livreur</th>
        <th scope="col">Date de reservation</th>

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
            <Modal.Title>Add command</Modal.Title>
          </Modal.Header>
  
          <Add_assigned_cmd Close={handleClose}/>
  
          <Modal.Footer> 
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
  
           </Modal.Footer>
        </Modal>
  
        {/* <Modal show={Update} onHide={handleCloseU}>
          <Modal.Header closeButton>
            <Modal.Title>Add command</Modal.Title>
          </Modal.Header> */}
  
          {/* <Updatecommand data={command} Close={handleCloseU} /> */}
  
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseU}>
              Close
            </Button>
  
          </Modal.Footer>
        </Modal> */}
        
      </>
    )
}

export default Show_cmd
