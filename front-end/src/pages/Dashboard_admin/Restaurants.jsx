import React from 'react'
import Navbar from '../../components/Admin/Nav_dashboard'
import Restau from '../../components/Admin/Restaurants/Show_restau'
import './pages.css'



const Restaurant = () => {
  return (
    <>
      <Navbar />
      <div className='livreur'>
      <h1>Restaurants</h1>
      </div>


      <div className='col-md-10 text-center float-right'>

      <Restau />
      </div>
    </>
  )
}

export default Restaurant
