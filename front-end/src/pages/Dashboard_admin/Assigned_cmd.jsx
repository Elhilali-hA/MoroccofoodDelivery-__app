import React from 'react'
import Navbar from '../../components/Nav_dashboard'
import CMD from '../../components/assigned_cmd'



const Assigned_cmd = () => {
  return (
    <>

    <Navbar />

    <div className='livreur'>
      <h1>Assigned Commandes</h1>

    </div>


    <div className='col-md-10 text-center float-right'>

     <CMD />

     </div>
      
    </>
  )
}

export default Assigned_cmd
