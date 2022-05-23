import React from 'react'
import Navbar from '../../components/Admin/Nav_dashboard'
import Livreur from '../../components/Admin/livreur/Show_livreur'
import './pages.css'



const Deliver = () => {
  return (
    <>
      <Navbar />
      <div className='livreur'>
      <h1>livreurs</h1>
      </div>


      <div className='col-md-10 text-center float-right'>

      <Livreur />
      </div>
    </>
  )
}

export default Deliver
