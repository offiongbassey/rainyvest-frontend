import React from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import {CanvasJSChart} from 'canvasjs-react-charts';
import palm1  from "../../../assets/palm-1.jpg";
import { Link } from 'react-router-dom';


const MarketItem = () => {

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
      text: "Analysis"
    },
    axisY: {
      title: "Market Price",
      suffix: "%"
    },
    axisX: {
      title: "Daily Data",
      prefix: "W",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: [
        { x: 1, y: 64 },
        { x: 2, y: 61 },
        { x: 3, y: 64 },
        { x: 4, y: 62 },
        { x: 5, y: 64 },
        { x: 6, y: 60 },
        { x: 7, y: 58 },
        { x: 8, y: 59 },
        { x: 9, y: 53 },
        { x: 10, y: 54 },
        { x: 11, y: 61 },
        { x: 12, y: 20 },
        { x: 13, y: 35 },
        { x: 14, y: 40 },
        { x: 15, y: 36 },
        { x: 16, y: 90 },
        { x: 17, y: 59.5 },
        { x: 18, y: 63 },
        { x: 19, y: 58 },
        { x: 20, y: 54 },
        { x: 21, y: 59 },
        { x: 22, y: 64 },
        { x: 23, y: 59 }
      ]
    }]
  }

  return (
    <>
      <h2>Market Product </h2>
      
      <br/>
      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
            <div className='stock r_card'>
                    <div className='lc_card'>
                  <CanvasJSChart options = {options}/>
                    </div>

                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                        </div>
                        <h4>Palm Oil Stock</h4>
                        <h2>N9,000</h2>
                        <hr/>
                        <p>Palm Oil Grade 1 is a very good product which price falls in the rainy season and increases in the dry season</p>
                        <div className='text-center'>
                        <br/>
                        <b>Quantity</b>
                        <input type='number' name='quantity' placeholder='How many do you want?' />
                        <Link to="/market-payment/89789789"><button className='btn-success'>Buy and Store</button> </Link>
                        </div>
                    </div>
                    </div>

                    
            </div>
            
      </div>
    </>
  )
}

export default MarketItem
