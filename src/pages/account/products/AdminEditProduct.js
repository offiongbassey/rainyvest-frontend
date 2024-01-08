import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import ProductForm from '../../../components/Product/ProductForm/ProductForm';
import RedirectLoggedOutUser from '../../../middleware/redirectLoggedOutUser';
import { editProduct, updateProductStatus, selectIsLoading } from '../../../redux/features/product/productSlice';
import { getAdminProductById } from '../../../services/marketService';

// const initialState = {
//     name: "",
//     price: "",
//     quantity: "",
//     description: ""
// }

const AdminEditProduct = () => {
    RedirectLoggedOutUser("/login");
    const {id} = useParams();
    const [product, setProduct] = useState("");
    
    useEffect(() => {
        async function getProduct() {
            const data = await getAdminProductById(id);
            setProduct(data);
            setImagePreview(data.image ? `${data.image}` : null);
        }getProduct();
    }, [id]);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [productImage, setProductImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const isLoading = useSelector(selectIsLoading);

    // const {name, price, quantity, description} = product;
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    }

    const saveProduct = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", product?.name);
        formData.append("price", product?.price);
        formData.append("quantity", product?.quantity);
        formData.append("description", product?.description);
        if(productImage){
            formData.append("image", productImage);
        }
        try {
            await dispatch(editProduct({id, formData}));
            navigate("/admin/products");
        } catch (error) {
            isLoading(false);
            
        }
    }

    const changeStatus =  async(e) => {
        e.preventDefault();
        try {
            await dispatch(updateProductStatus(id));
        } catch (error) {
            isLoading(false);
        }

    }


  return (
    <>
      {isLoading && <Loader />}
      <h2>Edit Product 
          <div className='float-right'>
                <button className='btn-success-out' onClick={changeStatus}>Change Status</button>
          </div>
      </h2>
      <br/>
      <div className='dashboard_card'>
            <ProductForm product={product} productImage={productImage} imagePreview={imagePreview} handleInputChange={handleInputChange} handleImageChange={handleImageChange} saveProduct={saveProduct} />
      </div>
    </>
  )
}

export default AdminEditProduct
