import React , {useContext, useState, useEffect} from 'react'
import axios from "axios";



const Store = ({value, last}) => {
    const token = JSON.parse(localStorage.getItem('name'));


    let [users, setusers] = useState([])
    let [livreurs, set_livreurs] = useState([])
  let [chefs, setchefs] = useState([])
  let [commands, set_commands] = useState([])
  let [restaurant, setrestaurant] = useState([])

    
    const userURL = "http://localhost:3000/api/users";
    const livreurURL = "http://localhost:3000/api/livreurs";
    const chefsURL = "http://localhost:3000/api/chefsecteur";
    const commandeURL = "http://localhost:3000/api/commandes";
    const restauURL = "http://localhost:3000/api/restaurants";




  async function getUsers(){

    let res = await axios.get(userURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let user = await res.data
    if(user.data){
      setusers(user.data.users);

    }
}
     
     async function getLivreur(){

         let res = await axios.get(livreurURL, { headers: {"Authorization" : `Bearer ${token}`} })
         let livreur = await res.data
     
         if(livreur){
             
             set_livreurs(livreur.livreur)
       
           }
     }

     async function getChefs(){

        let res =  await axios.get(chefsURL, { headers: {"Authorization" : `Bearer ${token}`} })
        let chef = await res.data
        if(chef){

            setchefs(chef.chefs);
        }
        
        }


        async function getCommandes(){
  
            await axios.get(commandeURL, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) =>{
             
             set_commands(res.data.cmd)
             
             
           })
           }

           async function getRestau(){
            let res = await axios.get(restauURL, { headers: {"Authorization" : `Bearer ${token}`} })
            let cli = await res.data
            if(cli){
                setrestaurant(cli.restaurants);
                
                
            }
            }


       

    const counter = {

        users: users.length,
        livreurs: livreurs.length,
        chefs: chefs.length,
        commands: commands.length,
        restaurant: restaurant.length,

    }


    const lastuser = users.slice(-1)
    const lastlivreur = livreurs.slice(-1)
    const lastcommande = commands.slice(-1)
    const lastchef = chefs.slice(-1)
    const lastreastau = users.slice(-1)



    const lastone = {
        user : getlast_username(),
        livreur: getlast_livreur(),
        chefs: getlast_manager(), 
        commands: getlast_command(), 
        restaurant: getlast_restau()
    }


    function getlast_username() {

        for (let i = 0; i < lastuser.length; i++) {            
        return lastuser[i].name
        }

    }

    function getlast_livreur() {

        for (let i = 0; i < lastlivreur.length; i++) {            
        return lastlivreur[i].name
        }

    }

    
    function getlast_command() {

        for (let i = 0; i < lastcommande.length; i++) {            
        return lastcommande[i].repas_id.name
        }

    }
    console.log(getlast_command())
    function getlast_manager() {

        for (let i = 0; i < lastchef.length; i++) {            
        return lastchef[i].name
        }

    }
    function getlast_restau() {

        for (let i = 0; i < lastreastau.length; i++) {            
        return lastreastau[i].name
        }

    }

    

    


    useEffect( () => {
        getUsers()
        getLivreur()
        getChefs()
        getCommandes()
        getRestau()

    },[])



  return (
    <>

      
      
      <p>{counter[value]}</p>
      <p>{lastone[last]}</p>


        
        



      
     </>
  )
}



export default Store
