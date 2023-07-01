import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdLogOut} from "react-icons/io";
import UserSidebarData from './UserSidebarData';
import MobileSidebar from './MobileSidebar';
import LogoutButton from './LogoutButton';


const Sidebar = ({children}) => {
  return (
      <>
      <MobileSidebar />
    <div className='wrap'>
        <div className='sidebar'>
            <h2>RainyVest</h2>
        <ul className='ul_hover'>
            <UserSidebarData/>
            
        </ul>
        <ul className='logout'>
        <Link to="/logout">
                <li><IoMdLogOut size={20} />   <LogoutButton /> </li>
            </Link>
        </ul>
     </div>
     <div className='contain'>
            <div className='head'>
               <Link to="/profile"> <HiOutlineUserCircle className='prof-icon' size={40} /></Link>
            </div>
            <div className='content'>
                {children}
            </div>
     </div>
    </div>
    </>
  )
}

export default Sidebar
