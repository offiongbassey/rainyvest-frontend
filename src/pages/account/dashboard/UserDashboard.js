import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import {GiWallet} from "react-icons/gi";
import {MdOutlineStore} from "react-icons/md";
import {BiRightArrow} from "react-icons/bi";
import {FaStore} from "react-icons/fa";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../../redux/features/auth/authSlice';
import { myInfo, userDashboard } from '../../../services/authService';
import Loader from '../../../components/loader/Loader';
import { Link } from 'react-router-dom';


const UserDashboard = () => {
    RedirectLoggedOutUser('/login');
    const userName = useSelector(selectUserName);
    const [user, setUser] = useState('');
    const [resources, setResources] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function getUserData(){
            const data = await myInfo();
            setUser(data);
        }getUserData();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        async function getRes(){
            const data = await userDashboard();
            setResources(data);
            setIsLoading(false);
        }getRes();
    }, []);
	if(resources !== ""){
  return (
    <>
    <h2>Welcome {userName},</h2>
    <p>Total Balance</p>
       {user === '' ? (<></>) : (
       <h2><GiWallet size={20}/> 
       {`₦${user?.balance.toLocaleString(undefined, {maximumFactorDigits: 2})}`}
       </h2>
       )}
    <br/>
        <div className='dashboard_small_card'>
            {isLoading && <Loader />}
            <div className='r_card'>
                    <div className='c_card'>
                        <div className='card_body'>
                        <p> <BiRightArrow size={15}/> STOCK BOUGHT</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon' size={50} />
                        <br/>
                        <br/>
                        {resources.stockSold.map((item, index) => 
                        <h2 key={index}>
                            {item.totalSold === null ? (0) : (`₦${item?.totalSold.toLocaleString(undefined, {maximumFactorDigits: 2})}`)} 
                        </h2>
                        )}
                        </div>
                    </div>
                    <div className='c_card'>
                    <div className='card_body'>
                        <p>  <BiRightArrow size={15}/> ACTIVE STOCK</p>
                        <br/>
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <br/>
                        <br/>
                        {resources.activeStock.map((item, index) => 
                        <h2 key={index}>
                            {item.totalActive === null ? (0) : (`₦${item.totalActive.toLocaleString(undefined, {maximumFactorDigits: 2})}`)} 
                        </h2>
                        )}
                        </div>
                    </div>
                    
                    <div className='c_card'>
                    <div className='card_body profit_background'>
                        <p>  <BiRightArrow size={15}/> STOCK PROFIT</p>
                        <br />
                        
                        <MdOutlineStore className='dashboard-icon'  size={50} />
                        <br/>
                        <br/>
                        {resources.stockProfit.map((item, index) => 
                        <h2 key={index}>
                            {item.totalProfit === null ? (0) : (`₦${item.totalProfit.toLocaleString(undefined, {maximumFactorDigits: 2})}`)}
                        </h2>
                        )}
                    </div>
                    </div>
            </div>
        </div>
      <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Stock Market</h4>
        <br/>
        {resources.stocks.length > 0 ? (
        <div className='stock r_card'>
            {
            resources.stocks.map((stock, index) => 
                <div className='c_card' key={index}>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${stock.product.image})`}}>
                    </div>
                    <h4>{stock.product.name}</h4>
                    <b>{`₦${stock.total.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
                    <p>{stock.product.description}</p>
                    <br/>
                    <div className='text-center'>
                    <Link to={`/stock/${stock.stockCode}`}><button className='btn-success'>View Analysis</button></Link>
                    </div>
                </div>
                </div>
                )
                }
        </div>
        ) : (<div className='text-center'><h4>You do not have any  active Stock at the moment. </h4> <br/> <Link to="/market"><button className='btn-success'>Visit Market</button></Link></div>)}
        
      </div>

      {/* User stock */}

    
      
    </>
  )
}
}

export default UserDashboard
