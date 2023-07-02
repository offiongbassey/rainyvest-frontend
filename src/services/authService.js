import axios from "axios";
import {toast} from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

export const registerUser = async(userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/signup`, userData);
        if(response.status === 201){
            toast.success(response.data);
        }
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        
    }
}
export const loginUser = async(userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/signin`, userData);
        if(response.statusText === 'OK'){
            toast.success("Successfully Logged In");
        }
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
    }
}
export const getUsers = async() => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/auth/users`);
        return response.data;
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        toast.error(message);
    } 
}
    export const verifyUser = async(token) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/verifyuser/${token}`);
            toast.success(response.data);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        }
    }

    export const logoutUser = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/logout`);
            toast.success(response.data);
            return response.data
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        }
    }

    export const getLoginStatus = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/loggedinstatus`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        }
    }
    export const myInfo = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        }
    }
    export const myAnalysis = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/useranalysis`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        }
    }
    
    export const resendVerificationMail = async(userData) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/resendverification`, userData);
            toast.success(response.data);
            return response.data;
        } catch (error) {
            const message = (
            error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
        }
    }

    export const forgotPassword = async(userData) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/forgotpassword`, userData);
            toast.success(response.data);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const changePassword = async({token, userData})  => {
        try {
            const response = await axios.patch(`${BACKEND_URL}/api/auth/changepassword/${token}`, userData);
            toast.success(response.data);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const resetPin = async() => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/resetpin`);
            if(response.status === 200){
               toast.success(response.data.message);
            }else{
                toast.error(response.data);
            }
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
                toast.error(message);

        }
    }
    export const changePin = async({token, userData}) => {
        // toast.error(`thiasa ${userData}`);
        try {
            const response = await axios.patch(`${BACKEND_URL}/api/auth/changepin/${token}`, userData);
            toast.success(response.data);
            return response.data;
        } catch (error) {
            const message = (
            error.response && error.response.data && error.response.data.message)
            || error.message || error.toString();
            toast.error(message);
            
        }
    }

    export const userDashboard = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/userdashboard`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const adminDashboard = async() => {
        try {
                const response = await axios.get(`${BACKEND_URL}/api/auth/admindashboard`);
                return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
            
        }
    }

    export const adminGetUserProfile = async(id) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/user/${id}`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const adminGetUserTransactions = async(id) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/user-transactions/${id}`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const initiateGoogleAuth = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/google/auth`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const getBanks = async() => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/auth/banks`);
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const verifyBankAccount = async(formdata) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/verifybankaccount`, formdata);
            if(response.data.status === true){
                toast.success(`${response.data.data.details.account_name} has been successfully verified`);
                }else{
                    toast.error(response.data.message);
                }
            return response.data;
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);
        }
    }

    export const withDrawFunds = async(userData) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/withdrawfunds`, userData);
            toast.success(response.data.message);
            return response.data
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message)        
                || error.message || error.toString();
                toast.error(message);   
        }
    }