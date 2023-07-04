import React, { useEffect, useState } from 'react';
import {MdOutlineStore} from "react-icons/md";
import {BiArrowFromLeft, BiRightArrow} from "react-icons/bi";
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import palm1  from "../../../assets/palm-1.jpg";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../../redux/features/auth/authSlice';
import { adminDashboard } from '../../../services/authService';
import Loader from '../../../components/loader/Loader';
import { FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  RedirectLoggedOutUser('/login');
  const userName = useSelector(selectUserName);
    const [resources, setResources] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      async function getRes(){
          const data = await adminDashboard();
          toast.success(`This is the productCount ${data.productCount}`);
          toast.success(`This is the activeStockCount ${data.activeStockCount}`);
          toast.success(`This is the soldStockCount ${data.soldStockCount}`);
          toast.success(`This is the stockSold ${data.stockSold}`);
          toast.success(`This is the activeStock ${data.activeStock}`);
          toast.success(`This is the stockProfit ${data.stockProfit}`);
          setResources(data);
          setIsLoading(false);
      }getRes();
  }, []);
if(resources !== ""){

  return (
    <>
    {isLoading && <Loader />}
      <h2>Welcome {userName}!</h2>
      <br/>
        <div className='dashboard_small_card'>
            <div className='r_card'>
                    <div className='c_card'>
                        <div className='card_body'>
                        <p> <BiRightArrow size={15}/> PRODUCTS</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon' size={50} />
                        <br/>
                        <h2>0</h2>
                        </div>
                    </div>
                    <div className='c_card'>
                    <div className='card_body'>
                        <p>  <BiRightArrow size={15}/> STOCKS</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <br/>
                        <h2>0</h2>
                        </div>
                    </div>
                    
                    <div className='c_card'>
                    <div className='card_body'>
                        <p>  <BiRightArrow size={15}/> STOCK SOLD</p>
                        <br />
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <br/>
                        <h2>0</h2>
                    </div>
                    </div>
            </div>

            <div className='r_card'>
                    <div className='c_card'>
                        <div className='card_body'>
                        <p> <BiRightArrow size={15}/> Stock Sold</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon' size={50} />
                        <br/>
                        <h2>₦0</h2>
                        </div>
                    </div>
                    <div className='c_card'>
                    <div className='card_body'>
                        <p>  <BiRightArrow size={15}/> Active Stock</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <br/>
                        <h2>₦0</h2>
                        </div>
                    </div>
                    
                    <div className='c_card'>
                    <div className='card_body profit_background'>
                        <p>  <BiRightArrow size={15}/> Stock Profit</p>
                        <br />
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <br/>
                        <h2>₦0</h2>
                    </div>
                    </div>
            </div>
        </div>

        <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Stock Market</h4>
        <br/>
        {/* <div className='stock r_card'>
            {resources.stocks.map((stock, index) => 
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
        </div> */}
        
      </div>
    </>
  )
}}

export default AdminDashboard
