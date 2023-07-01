import React from 'react';
import palm1  from "../../../assets/palm-1.jpg";
import {FaStore} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Market = () => {
  return (
    <>
        <div className='dashboard_card'>
        <h4><FaStore className='dashboard-icon-small' size={20} /> Stock Market</h4>
        <br/>
        <div className='stock r_card'>
                <div className='c_card'>
                    <div className='stock_item'>
                    <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                    </div>
                    <h4>Palm Oil Stock</h4>
                    <b>N9,000</b>
                    <p>Stock market has fallen, buy stock now and make maximum profit at ease.</p>
                    <br/>
                    <div className='text-center'>
                    <Link to="/market/uasiuas"><button className='btn-success'>Viw More</button></Link>
                    </div>
                </div>
                </div>

        </div>
        
      </div>
    </>
  )
}

export default Market
