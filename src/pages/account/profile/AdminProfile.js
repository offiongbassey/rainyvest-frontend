import React from 'react';
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdLogOut} from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectUserName } from '../../../redux/features/auth/authSlice';
import LogoutButton from "../../../components/Sidebar/LogoutButton";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';

const AdminProfile = () => {
  RedirectLoggedOutUser("/login");

  const userName = useSelector(selectUserName);
  return (
    <>
    <h2>My Profile</h2>
    <br/>
      <div className='dashboard_card'>
          <div className='profile'>
                    <HiOutlineUserCircle size={60} className='dashboard-icon' />
                    <h4>{userName}</h4>
          </div>
      </div>
      <div className='dashboard_card'>
          <div className='profile_footer'>
                <ul>
                <li><IoMdLogOut size={20} />  <LogoutButton /></li>
                </ul>
          </div>
      </div>
    </>
  )
}

export default AdminProfile
