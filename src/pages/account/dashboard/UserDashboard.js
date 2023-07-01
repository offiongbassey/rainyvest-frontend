import React from 'react';
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import "./Dashboard.css";
import palm1  from "../../../assets/palm-1.jpg";
import {BiArrowFromLeft} from "react-icons/bi";
import {GiWallet} from "react-icons/gi";
import {MdOutlineStore} from "react-icons/md";
import {BiRightArrow} from "react-icons/bi";
import {CanvasJSChart} from 'canvasjs-react-charts';
import {FaStore} from "react-icons/fa";


const UserDashboard = () => {
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
    <h2>Welcome Offiong,</h2>
    <p>Total Balance</p>
       <h2><GiWallet size={20}/> N50,000</h2>
    <br/>
        <div className='dashboard_small_card'>
            <div className='r_card'>
                    <div className='c_card'>
                        <div className='card_body'>
                        <p> <BiRightArrow size={15}/> STOCK BOUGHT</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon' size={50} />
                        <h2>N20,000</h2>
                        </div>
                    </div>
                    <div className='c_card'>
                    <div className='card_body'>
                        <p>  <BiRightArrow size={15}/> STOCK VALUE</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <h2>N52,000</h2>
                        </div>
                    </div>
                    
                    <div className='c_card'>
                    <div className='card_body profit_background'>
                        <p>  <BiRightArrow size={15}/> STOCK PROFIT</p>
                        <br />
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <h2>N32,000</h2>
                    </div>
                    </div>
            </div>
        </div>
      <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Stock Market</h4>
        <br/>
        <div className='stock r_card'>
                <div className='c_card'>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                    </div>
                    <h4>Palm Oil Stock</h4>
                    <b>N9,000</b>
                    <p>Stock market has fallen, buy stock now and make maximum profit at ease.</p>
                    <br/>
                    <div className='text-center'>
                    <button className='btn-success'>Viw More</button>
                    </div>
                </div>
                </div>

                <div className='c_card'>
                <div className='stock_item'>
                <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                </div>
                    <h4>Palm Oil Stock</h4>
                    <b>N9,000</b>
                    <p>Stock market has fallen, buy stock now and make maximum profit at ease.</p>
                    <br/>
                    <div className='text-center'>
                    <button className='btn-success'>Sell Out</button>
                    </div>
                </div>
                </div>

                <div className='c_card'>
                <div className='stock_item'>
                <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                </div>
                    <h4>Palm Oil Stock</h4>
                    <b>N9,000</b>
                    <p>Stock market has fallen, buy stock now and make maximum profit at ease.</p>                    
                    <br/>
                    <div className='text-center'>
                    <button className='btn-success'>Sell Out</button>
                    </div>
                </div>
                </div>

                <div className='c_card'>
                <div className='stock_item'>
                <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                </div>
                    <h4>Palm Oil Stock</h4>
                    <b>N9,000</b>
                    <p>Stock market has fallen, buy stock now and make maximum profit at ease.</p>
                    <br/>
                    <div className='text-center'>
                    <button className='btn-success'>Sell Out</button>
                    </div>
                </div>
                </div>
        </div>
        
      </div>

      {/* User stock */}

      <div className='dashboard_card'>
      <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Stock Analysis</h4>
        <br/>
        <div className='stock r_card'>
                <div className='c_card'>
                    <div className='stock_anaysis_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                    </div>
                    <h4>Palm Oil Stock</h4>
                    <b>N9,000 <BiArrowFromLeft color='green' size={20}/> N16,000</b>
                    <br/>
                    <hr/>
                    <p>You have gotten close to 30% profit. Would you love to sell out your stock?</p>
                    <div className='text-center'>
                    <button className='btn-success'>Sell Out</button>
                    </div>
                </div>
                </div>
    
                <div className='lc_card'>
               <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
                </div>
        </div>
      </div>
      
    </>
  )
}

export default UserDashboard
