import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { getAdminProducts } from '../../../services/marketService';
import {GrStatusGood} from "react-icons/gr";
import {FcCancel} from "react-icons/fc";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  RedirectLoggedOutUser('/login');

  useEffect(() => {
    async function adminProducts(){
      const data = await getAdminProducts();
      setProducts(data);
    }adminProducts();
    
  }, []);

  return (
    <>
      <h2>Products 
        <div className='float-right'>
      <Link to="/admin/add-product"><button className='btn-success'>Add New</button></Link>
      </div>
      </h2>
      
      <br/>
      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
          
            <div className='stock r_card'>
            {products.map((product) => {
            return(
                    <div className='c_card'>
                        <div className='stock_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${product.image})`}}>
                        </div>
                        <h4>{product.name}</h4>
                        <b>{`₦${product?.price.toLocaleString(undefined, {maximumFactorDigits: 2})}`}</b>
                        <br/>
                        <hr/>
                        <p>{product.description}</p>
                        {product.status === 'Active' ? (
                        <GrStatusGood color="green" size={25} />
                        ) : (
                        <FcCancel size={30} />
                        )}
                        <div className='text-center'>
                          
                          <br/>
                          <Link to={`/admin/edit-product/${product.id}`}> <button className='btn-success'>Edit</button> </Link> 
                          <Link to={`/admin/product/${product.id}`}> <button className='btn-success-out'>View More</button> </Link>
                        </div>
                    </div>
                    </div>
                  )
                })}

            </div>
            

      </div>
    </>
  )
}

export default AdminProducts
