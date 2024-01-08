import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Auth from '../../components/Auth/Auth';
import Loader from '../../components/loader/Loader';
import { changePassword } from '../../services/authService';

const initialState = {
  password: "",
  confirmPassword: ""
}
const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const {password, confirmPassword} = formData;
  const [isLoading, setIsLoading] = useState(false);
  const {token} = useParams();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const updatePassword = async(e) => {
    e.preventDefault();
    if(!password){
      return toast.error("Please provide New Password");
    }
    if(password !== confirmPassword ){
      return toast.error("Passwords do not match");
    }
    const userData = {
      password,
      confirmPassword
    }

    setIsLoading(true);
    try {
      await changePassword({token, userData});
      setIsLoading(false);  
    } catch (error) {
      setIsLoading(false);
    }
    

  }
  return (
    <>
    {isLoading && <Loader />}
       <Auth>
      <h2>Change Password</h2>
          <br/>
          <div className='auth-form'>
            <form onSubmit={updatePassword}>
            <div className='form-control'>
                <input type="password" name='password' value={password} onChange={handleInputChange} placeholder='Password' />
            </div>
            <div className='form-control'>
                <input type="password" name='confirmPassword' value={confirmPassword} onChange={handleInputChange} placeholder='Confirm Password' />
            </div>
            <div className='form-control'>
                <button type='submit' className='btn-success'>Change Password</button>
            </div>
            <br/>
            <br/>
            <Link to="/login"><p>Back to Login</p></Link>
            </form>
          </div>
      </Auth>
    </>
  )
}

export default ResetPassword
