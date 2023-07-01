import React, { useEffect, useState } from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { getMyStock, updateStockPayment } from '../../../services/stockService';
import { usePaystackPayment } from 'react-paystack';

const REACT_APP_PAYSTACK_KEY = process.env.REACT_APP_PAYSTACK_KEY;

const MarketPayment = () => {
  RedirectLoggedOutUser('/login');
  const navigate = useNavigate();
  const [stock, setStock] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {stockCode} = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function getStock(){
      const data = await getMyStock(stockCode);
      setStock(data.stock);
      setIsLoading(false);
    }
    getStock()
  }, [stockCode])

//validate stock
if(stock !== ""){

  const config = {
    
    reference: stock?.stockCode.toString(),
    email: stock?.user.email,
    amount: stock?.total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: REACT_APP_PAYSTACK_KEY
};

// you can call this function anything
const onSuccess =  (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    processStock(stock?.stockCode);
    console.log(reference);
    
  };
   // you can call this function anything
   const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    navigate(`/market-payment/${stock?.stockCode}`);
  }

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button className="btn-success" onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Pay with Paystack</button>
      </div>
    );
};

const processStock = async (stockCode) => {
  setIsLoading(true);
  await updateStockPayment(stockCode);
  navigate("/stock");
  setIsLoading(false);
}
  
  return (
    <>
    {isLoading && <Loader />}
      <h2>Payment Confirmation</h2>
      
      <br/>

      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
            {stock === "" ? (<></>) : (
            <div className='stock r_card'>
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${stock.product.image})`}}>
                        </div>
                        <h4>{stock?.product.name}</h4>
                        <p>Unit Price: {`₦${stock?.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</p> 
                        <p>Quantity: {stock.quantity}</p>
                        <h2>Total: {`₦${stock?.total.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</h2>
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
                            <PaystackHookExample />
                            <br/>
                            </div>
                        </div>
                        
                        
                    </div>
            </div>
            )}
            
      </div>
    </>
  )
}
}

export default MarketPayment
