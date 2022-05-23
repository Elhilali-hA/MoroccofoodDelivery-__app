import React from 'react'
import Navbar from '../../components/Admin/Nav_dashboard'
import Dashboard from '../../components/Admin/Nav_content'

const Dash_content = () => {
  return (
    <>
    
    <Navbar />

<div className='livreur'>
  <h1>Dashboard</h1>

</div>


<div className='col-md-10 text-center float-right'>

 <Dashboard />

 </div>
    
    
    </>
  )
}

export default Dash_content