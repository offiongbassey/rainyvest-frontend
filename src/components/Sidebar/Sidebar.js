import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import {LuLayoutDashboard} from "react-icons/lu";
import {FaStore, FaUserTie} from "react-icons/fa";
import {HiOutlineUserCircle} from "react-icons/hi";
import {MdProductionQuantityLimits} from "react-icons/md";
import {AiOutlineTransaction} from "react-icons/ai";
import {IoMdLogOut} from "react-icons/io";


const Sidebar = ({children}) => {
  return (
    <div className='wrap'>
        <div className='sidebar'>
            <h2>RainyVest</h2>
        <ul className='ul_hover'>
            <Link to="/dashboard">
                <li><LuLayoutDashboard size={20} /> Dashboard</li>
            </Link>
            <Link to="/market">
                <li>< FaStore size={20} /> Market</li>
            </Link>
            <Link to="/stock">
                <li><MdProductionQuantityLimits  size={20}/> Stock</li>
            </Link>
            <Link to="/transaction">
                <li><AiOutlineTransaction size={20} /> Transaction</li>
            </Link>
            <Link to="/profile">
                <li><FaUserTie size={20} /> Profile</li>
            </Link>
            
        </ul>
        <ul className='logout'>
        <Link to="/logout">
                <li><IoMdLogOut size={20} />  <button className='btn-success-out'>Logout</button></li>
            </Link>
        </ul>
     </div>
     <div className='contain'>
            <div className='head'>
               <Link to="/profile"> <HiOutlineUserCircle size={40} /></Link>
            </div>
            <div className='content'>
                {children}
            </div>
     </div>
    </div>
  )
}

export default Sidebar
