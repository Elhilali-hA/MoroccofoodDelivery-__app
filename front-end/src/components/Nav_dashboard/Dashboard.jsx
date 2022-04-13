import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineUserSwitch  } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';
import { Dropdown } from 'react-bootstrap';



export default function Navbar ()  {
  const [sidebar, setSidebar] = useState(false);
  const handleLogout = () => {

    localStorage.clear();
        window.location.href = '/';

  }

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    
      
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='col-12 d-flex justify-content-between navbar_dash'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

            <div className='d-flex ul_right'>
            
                <li className="nav-item1">
               <a className="nav-link active" href="#">UserName</a>
            </li>
          

           <li className="nav-item1">
             
           <Dropdown >
          <Dropdown.Toggle  variant="primary" id="dropdown-basic">
           <a className="nav-link" href="#"><AiOutlineUserSwitch size="15" /></a>
          </Dropdown.Toggle>

           <Dropdown.Menu>
           <Dropdown.Item onClick={handleLogout}>Profile</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
           <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
           </Dropdown.Menu>
           </Dropdown>
            </li>

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

