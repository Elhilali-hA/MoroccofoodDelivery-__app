import React from 'react'
import Navbar from '../../components/Nav_dashboard'
import Profil from '../../components/Profile/index'
import './pages.css'



const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='Profile'>
      <h1>Profile</h1>
      </div>


      <div className='col-md-10 text-center float-right'>

      <Profil />
      </div>
    </>
  )
}

export default Profile
