import React from 'react';
import {MdProductionQuantityLimits} from "react-icons/md";
import {AiOutlineTransaction} from "react-icons/ai";
import {LuLayoutDashboard} from "react-icons/lu";
import {FaStore, FaUserTie} from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserSidebarData = () => {
  return (
    <>
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
    </>
  )
}

export default UserSidebarData
