import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons  from "react-icons/bi";
import * as MdIcons from "react-icons/md"

export const SidebarData = [
  {
    title: 'dashboard',
    path: '/dashboard',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    cName: 'nav-text',
    icon:  <IoIcons.IoMdPeople />
  },
  {
    title: 'chefsecteur',
    path: '/dashboard/chefsecteur',
    cName: 'nav-text',
    icon : <FaIcons.FaUserTie /> 
  },
  {
    title: 'livreurs',
    path: '/dashboard/livreurs',
    cName: 'nav-text',
    icon : <MdIcons.MdDeliveryDining />
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    cName: 'nav-text',
    icon : <BiIcons.BiUserCircle/> 
  }
];