import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {BiCategoryAlt} from "react-icons/bi";
import {AiOutlineCloseCircle, AiOutlineBars} from "react-icons/ai";
import "./MobileSidebar.css";
import { IoMdLogOut } from 'react-icons/io';
import UserSidebarData from './UserSidebarData';
import { HiOutlineUserCircle } from 'react-icons/hi';
import LogoutButton from './LogoutButton';


const MobileSidebar = () => {
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
                <UserSidebarData />
              <li>
                <Link to="/signup"><IoMdLogOut size={20} />   <LogoutButton /> </Link>
              </li>
            </ul>
            <Link to="/profile"> <HiOutlineUserCircle className='prof-icon' size={40} /></Link>
      
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

export default MobileSidebar
