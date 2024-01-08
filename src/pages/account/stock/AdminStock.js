import React, { useEffect, useState } from 'react';
import {FaStore} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { adminStocks } from '../../../services/stockService';
import {MdGppGood, MdPending} from "react-icons/md";


const AdminStock = () => {
  RedirectLoggedOutUser("/login");
  const [stocks, setStocks] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchStocks(){
      const data = await adminStocks();
      setStocks(data);
      setIsLoading(false);
    }
    fetchStocks()
  }, []);


  if(stocks.length > 0)  {
  return (
    <>
    {isLoading && <Loader />}
        <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Purchased Stocks</h4>
        <br/>
        <div className='stock r_card'>
              {stocks.length > 1 ? 
              stocks.map((stock) => {
                const {product, stockCode, total, status, createdAt, user} = stock;
                return(
                <div className='c_card'>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${product.image})`}}>
                    </div>
                    <h4>{product.name}</h4>
                    <b>{`₦${total.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
                    <p>{product.description}</p>
                    <b>Date: {createdAt} <br/> <Link to={`/admin/user-profile/${user.id}`}> By: {`${user.firstName} ${user.lastName}`}</Link></b>
                    <br/>
                    <hr/>
                    <div className='text-center'>
                      
                    <span>{status}
                    {status === 'Pending' ? (
                    <MdPending />
                    ) : (
                    <MdGppGood color='green' />
                    )}
                    
                    </span>
                    </div>
                    <hr/>
                    <br/>
                    <div className='text-center'>
                      {status === 'Pending' ? (<></>
                    ) : (
                      <Link to={`/admin/stock/${stockCode}`}><button className='btn-success'>Analysis</button></Link> 

                    )}
                    </div>
                </div>
                </div>
                )
              })
               : (<div className='text-center'><h4>Market Item Unavailable</h4></div>)}

        </div>
        
      </div>
    </>
  )
}
}

export default AdminStock
