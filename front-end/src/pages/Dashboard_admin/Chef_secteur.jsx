import React from 'react'
import Navbar from '../../components/Admin/Nav_dashboard'
import Showchef from '../../components/Admin/chef_secteur/Show_chefs'
import './pages.css'



const index = () => {
  return (
    <>
      <Navbar />
      <div className='chef_secteur'>
      <h1>Chef secteur</h1>
      </div>

      <div className='col-md-10 text-center m-auto'>

      <Showchef />
      </div>
    </>
  )
}

export default index
