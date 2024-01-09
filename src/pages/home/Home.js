import React from 'react';
import "./Home.css";
import {FcBullish} from "react-icons/fc";
import HowItWorks from '../../components/How-it-works/HowItWorks';
import { Link } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import Welcome from '../../components/Welcome/Welcome';

const Home = () => {
  

  return (
    <div className='home-section'>
       {/* Welcome */}
       <Welcome />

       <HowItWorks />
     
        <div className='profit text-center'>
          <div className='info'>
            <h1>Profit Margin <FcBullish size={80} /></h1>
            <div className='info-desc'>
            <p>The Margin Proift is always appreciative. E.g. You can buy when its ₦9,000 sell it when its ₦16,000. Pay Service charge of ₦1,600 and Receive 14,400. You just made a profit of ₦5,400 within few months in just one stock. Imagine if you buy up to 100 or 1,000 stocks.</p>
              <Link to="/signup"><button className='btn btn-success-large'> Create a Free Account</button></Link>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home
