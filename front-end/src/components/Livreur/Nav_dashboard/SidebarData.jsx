import * as AiIcons from 'react-icons/ai';
import * as MdIcons  from "react-icons/md";
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
  {
    title: 'dashboard',
    path: '/dashboard',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome size="25"/>,
  },
  {
    title: 'commandes',
    path: '/livreur/commandes',
    cName: 'nav-text',
    icon : <MdIcons.MdOutlineFoodBank size="25"/> 
  },
  {
    title: 'cmd / Livreurs',
    path: '/livreur/assigned',
    cName: 'nav-text',
    icon : <GiIcons.GiStorkDelivery size="25"/> 
  }
];