import React, { useEffect, useState } from 'react';
import {HiOutlineUserCircle} from "react-icons/hi";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import {GrStatusGood} from "react-icons/gr";
import {MdOutlinePending} from "react-icons/md";
import { adminGetUserProfile } from '../../../services/authService';
import { Link, useParams } from 'react-router-dom';
import { FaStore } from 'react-icons/fa';

const AdminViewUserProfile = () => {
  RedirectLoggedOutUser("/login");
  const [res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
      setIsLoading(true);
      async function getUserData() {
          const data = await adminGetUserProfile(id);
          setRes(data);
          setIsLoading(false);
      }getUserData();
  }, []);
if(res !== ""){
    const {id, firstName, lastName, status, balance, email, accountName, accoutNumber, bank, phone} = res.user;
  return (
    <>
    <h2>{`${firstName} ${lastName}` } {status === "Active" ? ( <GrStatusGood /> ) : (<MdOutlinePending />)} </h2>
    <b>{`₦${balance.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
    <br/>
      <div className='dashboard_card'>
          <div className='profile'>
                    <HiOutlineUserCircle size={60} className='dashboard-icon' />
                    <h4>{phone} <br/> {email} </h4>
                    <div className='r_card'>
                    <div className='c_card'>
                        <h2>Bank Info:</h2>
                        </div>
                        <div className='c_card'>
                            <input type='text' disabled value={accoutNumber} />
                        </div>
                        <div className='c_card'>
                            <input type='text' disabled value={bank} />
                        </div>
                        <div className='c_card'>
                            <input type='text' disabled value={accountName}/>
                        </div>
                    </div>
          </div>
      </div>
      <div className='dashboard_card'>
         
         <h2>Stocks <div className='float-right'> <Link to={`/admin/user-transactions/${id}`}><button className='btn-success'>View Transactions</button></Link></div></h2>
         <h4><FaStore className='dashboard-icon-small' size={20} /> Stock Market</h4>
        <br/>
        <div className='stock r_card'>
            {res.stocks.map((stock, index) => 
                <div className='c_card' key={index}>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${stock.product.image})`}}>
                    </div>
                    <h4>{stock.product.name}</h4>
                    <b>{`₦${stock.total.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
                    <p>{stock.product.description}</p>
                    <br/>
                    <div className='text-center'>
                    <Link to={`/admin/stock/${stock.stockCode}`}><button className='btn-success'>View Analysis</button></Link>
                    </div>
                </div>
                </div>
                )}
        </div>
      </div>
    </>
  )
}
}
export default AdminViewUserProfile
