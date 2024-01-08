import React from 'react';
import {MdOutlineAccountCircle} from "react-icons/md";
import {BiPurchaseTagAlt} from "react-icons/bi";
import { MdCurrencyExchange} from "react-icons/md";
import {FaStore} from "react-icons/fa";
import investment from "../../assets/how4.png";
import {MdGppGood} from "react-icons/md";

const Step  = ({title, icon, desc}) => {
    return(
    <div className='steps'>
      <span>{icon}</span>
        <h2>  {title}</h2>
        <p>{desc}</p>
    </div>
    )
  }
const HowItWorks = () => {
  return (
    <>
       <div className='market'>
          <div className='container'>
              <h1><MdGppGood size={35} /> How it Works</h1>

          <div className='r_card'>
            <div className='c_card text'>
              <div className='r_card'>
              <div className='c_card'>
              <Step title={"Create an Account with Us"} 
              icon={<MdOutlineAccountCircle className='steps-icon' size={30} />}
              desc={"Creating an account on Rainyvest is very simple and easy. Sign up for an account with your name, email and phone number."} />
             </div>

             <div className='c_card text'>
              <Step title={"Buy Stock from your account"} 
              icon={<BiPurchaseTagAlt className='steps-icon' size={30} />}
              desc={"With just a click of a button, you can buy any agricultural products from your dashboard at ease."} />
             </div>
             </div>

             <div className='r_card'>
             <div className='c_card text'>
              <Step title={"Store and Monitor your Stock"} 
              icon={<FaStore className='steps-icon' size={30} />}
              desc={"After successful purchase, you can store it electronically through our global store and monitor it's analysis. Also, you will be notified when the price increases."} />
            </div>

            <div className='c_card text'>
              <Step title={"Sell your stock when the price increases"} 
              icon={<MdCurrencyExchange className='steps-icon' size={30} />}
              desc={"Selling your stock isn't difficult! With just a click of button, your stock will be sold and your account will be credited."} />
            </div>
              </div>
            </div>
            <div className='c_card img text-center'>
                 <img src={investment} alt='investment'/>
            </div>
          
          </div>
        </div>
        </div>

    </>
  )
}

export default HowItWorks
