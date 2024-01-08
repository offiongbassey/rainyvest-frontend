import axios from "axios";
import {toast} from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getMarket = async() => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/products/active`);
            return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
    }
}
export const getMarketItem = async (url) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/products/userproduct/${url}`);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
    }
}

export const getAdminProducts = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/products`);
        return response.data;
    } catch (error) {
        const message = (
        error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        toast.error(message);
    }
}

export const getAdminProductById = async (id) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/products/${id}`);
        
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
    }
}
