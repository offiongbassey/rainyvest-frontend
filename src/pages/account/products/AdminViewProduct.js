import React, { useEffect, useState } from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { getAdminProductById } from '../../../services/marketService';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import {Line} from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale,  PointElement, Legend, Tooltip)




const AdminViewProduct = () => {
  RedirectLoggedOutUser("/login");
  const [product, setProduct] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
      async function getSingleItem(){
      const data = await getAdminProductById(id);
      console.log(`this is the data ${data}`);
        setProduct(data);
      setIsLoading(false);
    }
    getSingleItem()
  }, [id]);

   let data = '';
   let options = '';
  if(product !== ""){
    data = {
    labels: product?.dailyprices.map(date => date.createdAt),
    datasets: [
      {
        label: 'Product Analysis (₦)',
        data: product?.dailyprices.map(daily => daily.price),
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



  return (
    <>
    {isLoading && <Loader />}
      <h2>Product</h2>
      
      <br/>
      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
            {!isLoading && (
            <div className='stock r_card'>
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${product.image})`}}>
                        </div>
                        <h4>{product?.name}</h4>
                        {product === '' ? ('') : (
                        <h2>{`₦${product?.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</h2>
                        )}
                        <hr/>
                        <p>{product?.description}</p>
                    </div>
                    </div>
                    
                    <div className='lc_card'>
                      {product === "" ? (
                      <p></p>
                      ) : (
                        <Line  data={data} options={options}></Line>
                    )}
                    </div>
            </div>
            )}
            
      </div>
    </>
  )
}

export default AdminViewProduct

