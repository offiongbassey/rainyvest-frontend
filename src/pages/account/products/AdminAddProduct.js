import React from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import palm1  from "../../../assets/palm-1.jpg";


const AdminAddProduct = () => {

 
  return (
    <>
      <h2>Products 
        <div className='float-right'>
      <button className='btn-success'>Add New</button>
      </div>
      </h2>
      
      <br/>
      <div className='dashboard_card'>
          <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Analysis</h4>
            <br/>
            <div className='stock r_card'>
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                        <div className='stock_img' style={{backgroundImage: `url(${palm1})`}}>
                        </div>
                        <div className='text-center'>
                            <input type='file' name='image' />
                        </div>
                    </div>
                    </div>

                    <div className='lc_card'>
                        <div className='dashboard_form_group'>
                            <div className='dashboard_col'>
                                <label>Title:</label>
                                <br/>
                                <input type='text' name="name" placeholder='Product Name' />
                            </div>
                            <div className='dashboard_col'>
                            <label>Price:</label>
                                <br/>
                                <input type='number' name="price" placeholder='Product Price' />
                            </div>
                        </div>
                        <div className='dashboard_form_group'>
                            <div className='dashboard_col'>
                            <label>Quantity:</label>
                                <br/>
                                <input type='number' name="quantity" placeholder='Quantity' />
                            </div>
                            <div className='dashboard_col'>
                            <label>Description:</label>
                                <br/>
                                <textarea type="text" name="description" rows="2" ></textarea>
                            </div>
                        </div>
                    </div>
            </div>
                    <div className='text-center'>
                        <button className='btn-success'>Add Product</button>
                    </div>
      </div>
    </>
  )
}

export default AdminAddProduct
