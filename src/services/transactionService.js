import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getMyTransactions = async() => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/transaction/user`);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
    }
}
export const getUsersTransactions = async() => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/transaction`);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)        
            || error.message || error.toString();
            toast.error(message);
    }
}