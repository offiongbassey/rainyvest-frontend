import React, { useEffect, useState } from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { getMarketItem } from '../../../services/marketService';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import {Line} from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import { toast } from 'react-toastify';
import { createStock } from '../../../services/stockService';

ChartJS.register(LineElement, CategoryScale, LinearScale,  PointElement, Legend, Tooltip)




const MarketItem = () => {
  RedirectLoggedOutUser("/login");
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');
  const [market, setMarket] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {url} = useParams();

  useEffect(() => {
    setIsLoading(true);
      async function getSingleItem(){
      const data = await getMarketItem(url);
        setMarket(data);
      setIsLoading(false);
    }
    getSingleItem()
  }, [url]);

   let data = '';
   let options = '';
  if(market !== ""){
    data = {
    labels: market.dailyprices.map(date => date.createdAt),
    datasets: [
      {
        label: 'Market Analysis (₦)',
        data: market.dailyprices.map(daily => daily.price),
        backgroundColor: 'white',
        borderColor: '#0ec71d',
        pointBorderColor: '#0ec71d',
        fill: true,
        tension: 0.4,
  
      }
    ]
  }
  
    options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      }
    }
  }
  
}



const addStock = async(e) => {
  e.preventDefault();
  if(!quantity){
    return toast.error("Please Provide Number of Stocks that you want.");
  }
  if(quantity < 1){
    return toast.error("Stock quantity cannot be less than 1");
  }
  const userData = {
    quantity
  }
 setIsLoading(true);
 const data = await createStock({url, userData});
 if(data.status === 201){
 navigate(`/market-payment/${data.data.stockCode}`);
}
setIsLoading(false);
}

  return (
    <>
    {isLoading && <Loader />}
      <h2>Market Product </h2>
      
      <br/>
      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
            {!isLoading && (
            <div className='stock r_card'>

                    <div className='lc_card'>
                      {market === "" ? (
                      <p></p>
                      ) : (
                        <Line  data={data} options={options}></Line>
                    )}
                    </div>
                     
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${market?.image})`}}>
                        </div>
                        <h4>{market?.name}</h4>
                        {market === '' ? ('') : (
                        <h2>{`₦${market?.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</h2>
                        )}
                        <hr/>
                        <p>{market?.description}</p>
                        <div className='text-center'>
                        <br/>
                        <b>Quantity</b>
                        <input type='number' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='How many do you want?' />
                        <button type='submit' onClick={addStock} className='btn-success'>Buy and Store</button>
                        </div>
                    </div>
                    </div>

                    
            </div>
            )}
            
      </div>
    </>
  )
}

export default MarketItem
