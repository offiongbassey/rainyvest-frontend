import "./Dashboard.css";
import React, { useEffect, useState } from 'react';
import {FaStore} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import {MdGppGood, MdPending} from "react-icons/md";
import { getMyStocks } from "../../../services/stockService";


const UserDashboard = () => {
  RedirectLoggedOutUser("/login");
  const [stocks, setStocks] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchStocks(){
      const data = await getMyStocks();
      setStocks(data);
      setIsLoading(false);
    }
    fetchStocks()
  }, []);


  // if(stocks.length > 0)  {
  return (
    <>
    {isLoading && <Loader />}
        <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Purchased Stocks</h4>
        <br/>
        {/* {stocks.length > 1 ? ( */}
        <div className='stock r_card'>
              {
              stocks.map((stock) => {
                const {product, stockCode, total, status} = stock;
                return(
                <div className='c_card'>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${product.image})`}}>
                    </div>
                    <h4>{product.name}</h4>
                    <b>{`₦${total.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
                    <p>{product.description}</p>
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
                      {status === 'Pending' ? (
                    <Link to={`/market-payment/${stockCode}`}><button className='btn-success-out'>Make Payment</button></Link>
                    ) : (
                      <Link to={`/stock/${stockCode}`}><button className='btn-success'>Analysis</button></Link> 

                    )}
                    </div>
                </div>
                </div>
                )
              })
               }

        </div>
        {/* ) : (<div className='text-center'><h4>You do not have any Stock yet</h4> <br/> <Link to="/market"><button className='btn-success'>Visit Market</button></Link></div>)} */}
        
      </div>
    </>
  )
// }
}
export default UserDashboard
