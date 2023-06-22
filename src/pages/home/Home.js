import React from 'react';
import "./Home.css";
import {GiPayMoney, GiReceiveMoney}  from "react-icons/gi";
import {BiStoreAlt} from "react-icons/bi";
import {FcBullish} from "react-icons/fc";
import HowItWorks from '../../components/How-it-works/HowItWorks';
const Home = () => {
  

  return (
    <div className='home-section'>
    <div className='home'>
            <div className='intro'>
              <div className='intro-text text-center'>
                    <h1>The Best Agric Invesment Market</h1>
                    <p>Join Millions of People today to invest in Agric stock at lower price and sale when high.</p>
                    <button className='btn-warning'>SignUp </button> <br/>
              </div>
            </div>
            <div className='container invest'>
            <section className='r_card'>
            <div className='c_card text-center'>
                 <span> <GiPayMoney color='white' size={50}/></span>
                 <h2>Buy</h2>
                 <p>Buy market stock at low price</p>
              </div>
              <div className='c_card text-center'>
                  <span> <BiStoreAlt color='white' size={50} /></span>
                  <h2>Store</h2>
                  <p>Store it and monitor the market analysis</p>
              </div>
              <div className='c_card text-center'>
                  <span> <GiReceiveMoney color='white' size={50} /></span>
                  <h2>Sell</h2>
                  <p>Sell it when the price increases</p>
              </div>
              

            </section>
            </div>
        </div>

       <HowItWorks />
        <div className='profit text-center'>
          <div className='info'>
            <h1>Profit Margin <FcBullish size={80} /></h1>
            <div className='info-desc'>
            <h4>The Margin Proift is always appreciative. E.g. You can buy when its ₦9,000 sell it when its ₦16,000. Pay Service charge of ₦1,600 and Receive 14,400. You just made a profit of ₦5,400 within few months in just one stock. Imagine if you buy up to 100 or 1,000 stocks.</h4>
            <button className='btn btn-success'> Create a Free Account</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home
