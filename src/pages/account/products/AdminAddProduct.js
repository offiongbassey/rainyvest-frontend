import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductForm from '../../../components/Product/ProductForm/ProductForm';
import { createProduct, selectIsLoading } from '../../../redux/features/product/productSlice';
import Loader from "../../../components/loader/Loader";
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';

const initialState = {
    name: "",
    price: "",
    quantity: "",
    description: ""
}
const AdminAddProduct = () => {
  RedirectLoggedOutUser("/login");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(initialState);
    const [productImage, setProductImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const isLoading = useSelector(selectIsLoading);

    const {name, price, quantity, description } = product;
    const handleInputChange = (e)  => {
        const {name, value} = e.target;
        setProduct({...product, [name] : value});
    }
    const handleImageChange = (e) => {
        setProductImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("image", productImage);
        formData.append("description", description);
        try {
            await dispatch(createProduct(formData));
            navigate('/admin/products');
        } catch (error) {
            isLoading(false);
        }
    }
 
  return (
    <>
    {isLoading && <Loader />}
      <h2>Products 
        <div className='float-right'>
      <button className='btn-success'>Add New</button>
      </div>
      </h2>
      
      <br/>
      <div className='dashboard_card'>
        <ProductForm product={product} productImage={productImage} imagePreview={imagePreview} handleInputChange={handleInputChange} handleImageChange={handleImageChange} saveProduct={saveProduct} />
      </div>
    </>
  )
}

export default AdminAddProduct
