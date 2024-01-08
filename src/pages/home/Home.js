import React from 'react';
import "./Home.css";
import {GiPayMoney, GiReceiveMoney}  from "react-icons/gi";
import {BiStoreAlt} from "react-icons/bi";
import {FcBullish} from "react-icons/fc";
import HowItWorks from '../../components/How-it-works/HowItWorks';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Welcome from '../../components/Welcome/Welcome';
const slider1 = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
const slider2 = 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
const slider3 = 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
const slider4 = 'https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';
const slider5 = 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  2000: {
    items: 4,
  },
  1200: {
    items: 3,
  },
  800: {
    items: 2,
  },
  0: {
    items: 1,
  },
};

const items = [
  <img src={slider2}  onDragStart={handleDragStart} role="presentation" />,
  <img src={slider3}  onDragStart={handleDragStart} role="presentation" />,
  <img src={slider4} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider5}  onDragStart={handleDragStart} role="presentation" />,
];



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
