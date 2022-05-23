import React from 'react'
import Commande from '../../components/Admin/commandes'
import Navbar from '../../components/Livreur/Nav_dashboard'


const Commandes = () => {
  return (
    <>
    <Navbar />

    <div className='livreur'>
      <h1>Commandes</h1>

    </div>


    <div className='col-md-10 text-center float-right'>

     <Commande />

     </div>

    </>
  )
}

export default Commandes