import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form'


function Add_assigned_cmd({Close}) {

  let [livreurs, set_livreurs] = useState([])
  const LivreurURL = "http://localhost:3000/api/livreurs";

  let [commands, set_commands] = useState([])
  const commandeURL = "http://localhost:3000/api/commandes";



  const baseURL = 'http://localhost:3000/api/assigned_commandes'
  const [add_assigned_cmd, set_addassigned_cmd] = useState({
    command_id: [""],
    status:"",
    livreur_id:[""],
  
  })




  async function getDAta(){

    await axios.get(LivreurURL, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) =>{
     
     set_livreurs(res.data.livreur)
     
   })
   }


   async function getcommande(){
  
    await axios.get(commandeURL, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) =>{
     
     set_commands(res.data.cmd)
     
     
   })
   }

   useEffect( () => {
    getDAta()
    getcommande()
    }, []);


    const getLivreur = livreurs.map((item, index) => {

        return(

          
            <>
            <option   key={index}> {item._id} </option>
            </>
         

        )
    
    })

    const getcmd = commands.map((item, index) => {

        return(  
            <>
           
             
            <option key={index} >{item._id}</option>  
            </>
          

        
        
        )
    
    })

    





  const [error, setError] = useState("") 
  const token = JSON.parse(localStorage.getItem('name'));

  

  function handleChange({ currentTarget: option }) {
    set_addassigned_cmd({ ...add_assigned_cmd, [option.name]: option.value })
  }

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
            axios.post(baseURL,  add_assigned_cmd, { headers: {"Authorization" : `Bearer ${token}`} }).then(
              Close()
           ).catch((error))
            Swal.fire('assigned_cmd Deleted!', '', 'success')

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
    <form className="p-2" onSubmit={handleSubmit}>
  <div className="form-row flex">
    <div className="form-group col-md-6">
      <label htmlFor="inputcommand_id">command_id</label>
      <Form.Select type="text"
            placeholder='command_id'
            name='command_id'
            onChange={handleChange}
            required 
         aria-label="Default select example">
             
          
          <option value={add_assigned_cmd.command_id} >select commande</option>
             {getcmd}
          

        
          </Form.Select> 
    </div>

    <div className="form-group col-md-3">
      <label htmlFor="inputstatus">status</label>
      <Form.Select type="text"
            placeholder="status"
            name="status"
            onChange={handleChange}
            
            required
         aria-label="Default select example">
             <option selected value={add_assigned_cmd.status} >change status</option>
             <option >Pending</option>
             <option >road to deliver</option>
             <option >Delivered</option>

        
         </Form.Select>
    </div>

  </div>
  
  <div className="form-group">
  <Form.Select name="livreur_id"
        placeholder="livreur_id"
        onChange={handleChange}
         aria-label="Default select example">
             
          <option value={add_assigned_cmd.livreur_id}>select Livreur</option>
            
            
               {getLivreur}
            
        
         </Form.Select>
  </div>

  

  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_assigned_cmd
