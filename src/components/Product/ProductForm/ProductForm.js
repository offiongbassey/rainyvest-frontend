import React from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';


const ProductForm = ({product, productImage, imagePreview, handleInputChange, handleImageChange, saveProduct}) => {

  return (
    <>
        <h4><TbBrandGoogleAnalytics className='dashboard-icon-small' size={20} /> Product Image</h4>
            <br/>
            <form onSubmit={saveProduct}>
            <div className='stock r_card'>
                    <div className='c_card'>
                        <div className='stock_anaysis_item'>
                            {imagePreview != null ? (
                        <div className='stock_img' style={{backgroundImage: `url(${imagePreview})`}}></div>
                        ) : (<p>You've not uploaded an image yet</p>)}
                        <div className='text-center'>
                            <input type='file' onChange={(e) => handleImageChange(e)} name='image' />
                        </div>
                    </div>
                    </div>

                    <div className='lc_card'>
                        <div className='dashboard_form_group'>
                            <div className='dashboard_col'>
                                <label>Title:</label>
                                <br/>
                                <input type='text' value={product?.name} onChange={handleInputChange} name="name" placeholder='Product Name' />
                            </div>
                            <div className='dashboard_col'>
                            <label>Price:</label>
                                <br/>
                                <input type='number' value={product?.price} onChange={handleInputChange} name="price" placeholder='Product Price' />
                            </div>
                        </div>
                        <div className='dashboard_form_group'>
                            <div className='dashboard_col'>
                            <label>Quantity:</label>
                                <br/>
                                <input type='number' value={product?.quantity} onChange={handleInputChange} name="quantity" placeholder='Quantity' />
                            </div>
                            <div className='dashboard_col'>
                            <label>Description:</label>
                                <br/>
                                <textarea type="text" value={product?.description} onChange={handleInputChange} name="description" rows="2" ></textarea>
                            </div>
                        </div>
                    </div>
            </div>
                    <div className='text-center'>
                        <button className='btn-success'>Save Product</button>
                    </div>
                    </form>
    </>
  )
}

export default ProductForm
