import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { SET_LOGIN } from '../redux/features/auth/authSlice';
import { getLoginStatus } from '../services/authService';

const RedirectLoggedOutUser = (path) => {
 const navigate = useNavigate();
 const dispatch = useDispatch();

 useEffect(() => {
        const redirectUser = async() => {
            const isLoggedIn = await getLoginStatus();
            dispatch(SET_LOGIN(isLoggedIn));
            if(!isLoggedIn){
                toast.info("Session expired, please login");
                navigate(path)
            }
        }
        redirectUser();

 }, [path, navigate, dispatch])
}

export default RedirectLoggedOutUser

