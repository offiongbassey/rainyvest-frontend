import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import Loader from "../../components/loader/Loader";
import { initiateGoogleAuth, loginUser } from '../../services/authService';
import { SET_LOGIN, SET_ROLE, SET_USERNAME } from '../../redux/features/auth/authSlice';

import { GoogleLogin } from '@react-oauth/google';




const initialState = {
  email: "",
  password: ""
}

const Login = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const {email, password} = formData;




  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  const login = async (e) => {
    e.preventDefault();
    if(!email){
     return toast.error("Please provide your email");
    }
    if(!password){
      return toast.error("Please provide your password");
    }
    setIsLoading(true);
    const userData = {
      email, 
      password
    }
    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_USERNAME(data.firstName));
      await dispatch(SET_ROLE(data.role));
      if(data.role === 'Admin'){
        navigate("/admin/dashboard");
      }else{
        navigate("/dashboard");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      
    }

  }


  return (
    <>
    {isLoading && <Loader />}
      <Auth>
      <h2>Login to Continue</h2>
          
          <div className='auth-form'>
            <form onSubmit={login}>
            <div className='form-control'>
                <input type="email" name='email' value={email} onChange={handleInputChange} placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <input type="password" name='password' value={password} onChange={handleInputChange} placeholder='Password' />
            </div>
            <div className='form-control'>
                <button type='submit' className='btn-success'>Login</button>
            </div>
            <br/>
            <div className='form-control'>
                <p>Or Continue with:</p>
                
            </div>
            <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
            
            <br/>
            <Link to="/forgot-password"><p>Forgot Password</p></Link>
            </form>
          </div>
      </Auth>
    </>
  )
}

export default Login
