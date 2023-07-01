import axios from "axios";
// import {toast} from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;

//create new product
const createProduct = async (formData) => {
     const response = await axios.post(`${API_URL}/create`, formData);
    return response.data;
}
const getProducts = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
}
const editProduct = async ({id, formData}) => {
    const response = await axios.patch(`${API_URL}/update/${id}`, formData);
    return response.data;
}
const changeProductStatus = async (id) => {
    const response = await axios.patch(`${API_URL}/updatestatus/${id}`);
    return response.data;
}

const productService = {
    createProduct,
    getProducts,
    editProduct,
    changeProductStatus
}

export default productService;