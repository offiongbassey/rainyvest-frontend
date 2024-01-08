import React from 'react';
import {MdProductionQuantityLimits} from "react-icons/md";
import {AiOutlineTransaction} from "react-icons/ai";
import {LuLayoutDashboard} from "react-icons/lu";
import {FaStore, FaUserTie} from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminSidebarData = () => {
  return (
    <>
            <Link to="/admin/dashboard">
                <li><LuLayoutDashboard size={20} /> Dashboard</li>
            </Link>
            <Link to="/admin/users">
                <li><LuLayoutDashboard size={20} /> Users</li>
            </Link>
            <Link to="/admin/products">
                <li><FaStore size={20} /> Products</li>
            </Link>
            <Link to="/admin/stock">
                <li><MdProductionQuantityLimits  size={20}/> Stock</li>
            </Link>
            <Link to="/admin/transactions">
                <li><AiOutlineTransaction size={20} /> Transactions</li>
            </Link>
            <Link to="/admin/profile">
                <li><FaUserTie size={20} /> Profile</li>
            </Link>
    </>
  )
}

export default AdminSidebarData
