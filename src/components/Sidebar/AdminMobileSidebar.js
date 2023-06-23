import React, { useState } from 'react';
import AdminSidebarData from './AdminSidebarData';
import {Link} from "react-router-dom";
import {BiCategoryAlt} from "react-icons/bi";
import {AiOutlineCloseCircle, AiOutlineBars} from "react-icons/ai";
import "./MobileSidebar.css";
import { IoMdLogOut } from 'react-icons/io';
import { HiOutlineUserCircle } from 'react-icons/hi';

const AdminMobileSidebar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='mobileNavbar'>
    <div className='container d_flex'>
      <Link to="/"><div className='categories d_flex'>
        <span className='fa-solid fa-border-all'></span>
        <h4><BiCategoryAlt size={20} />RainyVest  </h4>
      </div>
      </Link>
      <div className='navlink'>
        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
            <AdminSidebarData />
          <li>
            <Link to="/logout"><IoMdLogOut size={20} />  <button className='btn-success-out'>Logout</button></Link>
          </li>
        </ul>
        <Link to="/admin/profile"> <HiOutlineUserCircle className='prof-icon' size={40} /></Link>
        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
          {
            MobileMenu? <AiOutlineCloseCircle className='close' size={30} />  : <AiOutlineBars className='open' size={30} />
          }

        </button>

      </div>

    </div>

  </div>
  )
}

export default AdminMobileSidebar
