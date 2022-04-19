import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import * as BiIcons from "react-icons/bi"
import './Navbar.css'
import { IconContext } from 'react-icons';
import { Dropdown } from 'react-bootstrap';
import jwt_decode from "jwt-decode";




export default function Navbar ()  {
  const [sidebar, setSidebar] = useState(false);
  const handleLogout = () => {

    localStorage.clear();
        window.location.href = '/';

  }

  const token = JSON.parse(localStorage.getItem('name'));
  const user = jwt_decode(token);
  



  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    
      
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='col-12 d-flex justify-content-between navbar_dash'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

            <div className='d-flex ul_right'>
            
                <div className="nav-item1">
               <a className="nav-link active" href="#">{user.name}</a>
            </div>
          
            
           <div className="nav-item2">
             
           <Dropdown >
           <a className="nav-link" href="#">
          <Dropdown.Toggle  variant="dark" id="dropdown-basic">
             <BiIcons.BiUserCircle size="20" />
          </Dropdown.Toggle>
          </a>

           <Dropdown.Menu>
           <Dropdown.Item onClick={handleLogout}>Profile</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
           <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
           </Dropdown.Menu>
           </Dropdown>
            </div>

            </div>

        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='ul_dashboard nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

