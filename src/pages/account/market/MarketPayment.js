import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import palm1  from "../../../assets/palm-1.jpg";


const MarketPayment = () => {

  
  return (
    <>
      <h2>Payment Confirmation</h2>
      
      <br/>
      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
            <div className='stock r_card'>
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                        </div>
                        <h4>Palm Oil Stock</h4>
                        <p>Unit Price: N9,000</p> 
                        <p>Quantity: 10</p>
                        <h2>Total: N90,000</h2>
                    </div>
                    </div>

                    <div className='lc_card'>
                        <div className='payment_terms'>
                        <h2>RainyVest Terms and Condition</h2>
                            <p> <BiArrowFromLeft color='green' size={20}/> You will be charged 10% of your stock amount sold.</p>
                            <p> <BiArrowFromLeft color='green' size={20}/>You can sell out your stock at any given time but we recommend you to sell when the price increases inorder to maximize profit.</p>
                            <b>By clicking "Make Payment", you have agreed to our terms and condition.</b>
                            <br/>
                            <br/>
                            <div className='text-center'>
                            <button className='btn-success'>Make Payment</button>
                            <br/>
                            </div>
                        </div>
                        
                        
                    </div>
            </div>
            
      </div>
    </>
  )
}

export default MarketPayment
