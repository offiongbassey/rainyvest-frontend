import React, { useEffect, useState } from 'react';
import {FaStore} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getMarket } from '../../../services/marketService';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';

const Market = () => {
  RedirectLoggedOutUser("/login");
  const [market, setMarket] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMarket(){
      const data = await getMarket();
      setMarket(data);
      setIsLoading(false);
    }
    fetchMarket()
  }, []);

  return (
    <>
    {isLoading && <Loader />}
        <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Stock Market</h4>
        <br/>
        <div className='stock r_card'>
              {market.length > 1 ? 
              market.map((marketItem) => {
                const {name, price, image, description, url} = marketItem;
                return(
                <div className='c_card'>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${image})`}}>
                    </div>
                    <h4>{name}</h4>
                    <b>{`₦${price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
                    <p>{description}</p>
                    <br/>
                    <div className='text-center'>
                    <Link to={`/market/${url}`}><button className='btn-success'>View More</button></Link>
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

export default Market
