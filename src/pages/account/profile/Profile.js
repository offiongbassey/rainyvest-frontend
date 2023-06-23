import React from 'react';
import {GiWallet} from "react-icons/gi";
import {HiOutlineUserCircle} from "react-icons/hi";
import { Link } from 'react-router-dom';
import {IoMdLogOut} from "react-icons/io";

const Profile = () => {
  return (
    <>
    <h2>My Profile</h2>
    <p>Total Balance</p>
       <h2><GiWallet size={20}/> N50,000</h2>
    <br/>
      <div className='dashboard_card'>
          <div className='profile'>
                    <HiOutlineUserCircle size={60} className='dashboard-icon' />
                    <h4>Offiong Bassey</h4>
                    <button className='btn-success'>Reset Pin</button> <button className='btn-success-out'>Withdraw</button>
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

export default Profile
