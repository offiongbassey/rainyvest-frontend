import React, { useEffect, useState } from 'react';
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { getMyStock, sellStockOut } from '../../../services/stockService';
import {Line} from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale,  PointElement, Legend, Tooltip);


const StockItem = () => {
    RedirectLoggedOutUser("/login");
    const navigate = useNavigate();
    const [stock, setStock] = useState("");
    const [dailyPrice, setDailyPrice] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {stockCode} = useParams();

    useEffect(() => {
        setIsLoading(true);
        async function getStock(){
            const data = await getMyStock(stockCode);
            setStock(data.stock);
            setDailyPrice(data.dailyPrice)
            setIsLoading(false);
        }
        getStock();
    }, [stockCode]);
    
    
    if(stock !== ""){
        let detector = '#0ec71d';
        if(stock.product.price < stock.price){
            detector = 'red';
        }else{
            detector = '#0ec71d';
        }
        const data = {
            labels: dailyPrice.map(date => date.createdAt),
            datasets: [
              {
                label: 'Market Analysis (₦)',
                data: dailyPrice.map(daily => daily.price),
                backgroundColor: 'white',
                borderColor: detector,
                pointBorderColor: detector,
                fill: true,
                tension: 0.4,
          
              }
            ]
          }
          
           const  options = {
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
          
        const pre_estimatedProfit = stock.product.price - stock.price;
        const estimatedProfit = pre_estimatedProfit * stock.quantity;

        const sellStock = async()=> {
            try {
                setIsLoading(true);
                await sellStockOut(stockCode);
                navigate("/stock");
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }

    return (
        <>{isLoading && <Loader />}
          <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Stock Analysis</h4>
            <br/>
            <div className='stock r_card'>
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${stock.product.image})`}}>
                        </div>
                        <h4>{stock.product.name}</h4>
                        <b>Amount Purchased: {`₦${stock.total.toLocaleString(undefined, {maximumFactorDigits: 2})}`} <br/> 
                        Quantity Purchased: {`${stock.quantity.toLocaleString(undefined, {maximumFactorDigits: 2})}`}
                        </b>
                        <br/>
                        <hr/>
                        {stock.status === "Sold" ? (
                        <>
                        <p>You purchased {stock.product.name} at the unit rate of {`₦${stock.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`} and sold it at the unit rate of {`₦${stock.currentMarketPrice.toLocaleString(undefined, {maximumFactorDigits: 2})}`} <br/> <b>Total Price Sold: {`₦${stock.soldPrice.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b></p>
                        <hr/>
                        <b>Profit: {`₦${stock.profit.toLocaleString(undefined, {maximumFactorDigits: 2})}`} </b>
                        <hr/>
                        </>
                        ) : (
                            <>
                        <p>As at the time {stock.product.name} was purchased, the unit price was {`₦${stock.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}. Currently, the price is {`₦${stock.product.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</p>
                        <hr/>
                        <b>Estimated Profit: {`₦${estimatedProfit.toLocaleString(undefined, {maximumFactorDigits: 2})}`} </b>
                        <hr/>
                        </>
                        )}
                        <div className='text-center'><br/>
                        {stock.status === "Active" ? (
                        <button onClick={sellStock} className='btn-success'>Sell Out</button>
                        ) : (<></>)}
                        </div>
                    </div>
                    </div>
    
                    <div className='lc_card'>
                    <Line  data={data} options={options}></Line>
                    </div>
            </div>
          </div>
        </>
      )
    }
    }

export default StockItem
