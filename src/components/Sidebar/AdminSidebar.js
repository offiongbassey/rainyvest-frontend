import React from 'react';
import AdminSidebarData from './AdminSidebarData';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdLogOut} from "react-icons/io";
import AdminMobileSidebar from './AdminMobileSidebar';
import LogoutButton from './LogoutButton';

const AdminSidebar = ({children}) => {
  return (
    <>
       <AdminMobileSidebar />
    <div className='wrap'>
        <div className='sidebar'>
            <h2>RainyVest</h2>
        <ul className='ul_hover'>
            <AdminSidebarData/>
            
        </ul>
        <ul className='logout'>
                <li><IoMdLogOut size={20} />   <LogoutButton /> </li>
        </ul>
     </div>
     <div className='contain'>
            <div className='head'>
               <Link to="/admin/profile"> <HiOutlineUserCircle className='prof-icon' size={40} /></Link>
            </div>
            <div className='content'>
                {children}
            </div>
     </div>
    </div>
    </>
  )
}

export default AdminSidebar
