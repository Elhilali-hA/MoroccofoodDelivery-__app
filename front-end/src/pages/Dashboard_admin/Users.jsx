import React from 'react'
import Navbar from '../../components/Nav_dash'
import Showusers from '../../components/Clients/Show_user'
import './Pages.css'



const index = () => {
  return (
    <>
      <Navbar />
      <div className='users'>
      <h1>Users</h1>
      </div>

      <div className='col-md-10 text-center m-auto'>

      <Showusers />
      </div>
    </>
  )
}

export default index
