import React from 'react';
import {BsIntersect} from "react-icons/bs";
import investment from "../../assets/invest.jpg";
import {BiStoreAlt} from "react-icons/bi";

const Step  = ({title, desc}) => {
    return(
    <div className='steps'>
        <h2> <span><BsIntersect size={30} /></span> {title}</h2>
        <p>{desc}</p>
    </div>
    )
  }
const HowItWorks = () => {
  return (
    <>
       <div className='market'>
          <div className='container'>
            <div className='info'>
              <h1><BiStoreAlt size={25} /> Sto<span className='head-span'>ck</span> Market</h1>
          </div>
          <div className='r_card'>
            <div className='c_card text'>
              <Step title={"Intro"} 
              desc={"Palm Oil Product is one of the most profitable agric products. It's price falls at a certain time and later rises."} />
              <Step title={"Buy"} 
              desc={"With our analysis, you will be able to know when the price falls in order to Buy."} />
              <Step title={"Store as Stock"} 
              desc={"After successful purchase, you can store it electronically through our global store and monitor it's analysis. Also, you will be notified when the price increases."} />
              <Step title={"Sell"} 
              desc={"Selling your stock isn't difficult! With just a click of button, your stock will be sold and your account will be credited."} />
              <Step title={"Service Charge"} 
              desc={"Rainyvest only charges 10%"} />
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
