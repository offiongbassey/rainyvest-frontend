import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const createStock = async({url, userData}) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/api/stock/create/${url}`, userData);
        toast.success(response.data.message);
        return response;
    } catch (error) {
        const message = (
        error.response && error.response.data && error.response.data.message)        
        || error.message || error.toString();
        toast.error(message);
    }
}

export const getMyStock = async(stockCode) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/stock/userstock/${stockCode}`);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
    }
}
export const updateStockPayment = async(stockCode) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/api/stock/approvepayment/${stockCode}`);
        toast.success(response.data);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
    }
}
export const getMyStocks = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/stock/userstocks`);
        return response.data;

    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
        
    }
}
export const sellStockOut = async(stockCode) => {
    try {
            const response = await axios.patch(`${BACKEND_URL}/api/stock/sell/${stockCode}`);
            toast.success(response.data);
            return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
    }
}



export const adminStocks = async() => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/stock`);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);       
    }
}
export const adminStock = async(stockCode) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/stock/view/${stockCode}`);
        return response.data;
    } catch (error) {
        const message = (
        error.response && error.response.data && error.response.data.message)        
        || error.message || error.toString();
        toast.error(message);
        
    }
}