import React, { useEffect, useState } from 'react';
import {HiOutlineUserCircle} from "react-icons/hi";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import {GrStatusGood} from "react-icons/gr";
import {MdOutlinePending} from "react-icons/md";
import { adminGetUserTransactions } from '../../../services/authService';
import { Link, useParams } from 'react-router-dom';
import { FaStore } from 'react-icons/fa';

const AdminUserTransactions = () => {
  RedirectLoggedOutUser("/login");
  const [res, setRes] = useState("");
  const {id} = useParams();

  useEffect(() => {
      async function getUserData() {
          const data = await adminGetUserTransactions(id);
          setRes(data);
      }getUserData();
  }, [id]);
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
         
         <h2><div className='float-right'> <Link to={`/admin/user-profile/${id}`}><button className='btn-success'>View Stock</button></Link></div></h2>
         <h2><FaStore className='dashboard-icon-small' size={20} /> Transactions</h2>
        <br/>
        <div className='stock r_card'>
        <div className='table'>
          <table>
              <thead>
                  <tr>
                      <th>Transaction Ref</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Desc</th>
                      <th>Date</th>
                  </tr>
              </thead>
              <tbody>
                  {res.transactions.map((transaction, index) => {
                      const {transactionCode, amount, type, status, createdAt} = transaction;
                      return(
                  <tr key={index}> 
                      <td>{transactionCode}</td>
                      <td>{`₦${amount.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</td>
                      <td>{status}</td>
                      <td>{type}</td>
                      <td>{createdAt}</td>
                  </tr>
                  )
                })
                }
            
              </tbody>
          </table>
      </div>
        </div>
      </div>
    </>
  )
}
}
export default AdminUserTransactions

