import React from 'react'
import Command from '../../components/Admin/commandes'
import Navbar from '../../components/Admin/Nav_dashboard'


const Commandes = () => {
  return (
    <>
    <Navbar />

    <div className='livreur'>
      <h1>Commandes</h1>

    </div>


    <div className='col-md-10 text-center float-right'>

     <Command />

     </div>

    </>
  )
}

export default Commandes