import React from 'react'
import Navbar from '../../components/Nav_dashboard'
import Showusers from '../../components/Users/Show_user'
import './pages.css'



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
