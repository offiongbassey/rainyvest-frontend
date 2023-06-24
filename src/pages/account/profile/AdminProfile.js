import React from 'react';
import {HiOutlineUserCircle} from "react-icons/hi";
import { Link } from 'react-router-dom';
import {IoMdLogOut} from "react-icons/io";

const AdminProfile = () => {
  return (
    <>
    <h2>My Profile</h2>
    <br/>
      <div className='dashboard_card'>
          <div className='profile'>
                    <HiOutlineUserCircle size={60} className='dashboard-icon' />
                    <h4>Offiong Bassey</h4>
          </div>
      </div>
      <div className='dashboard_card'>
          <div className='profile_footer'>
                <ul>
                <Link to="/logout">
                <li><IoMdLogOut size={20} />  <button className='btn-success-out'>Logout</button></li>
                </Link>
                </ul>
          </div>
      </div>
    </>
  )
}

export default AdminProfile
