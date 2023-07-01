import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Auth from '../../components/Auth/Auth';
import Loader from '../../components/loader/Loader';
import { forgotPassword, validateEmail } from '../../services/authService';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const forgotUserPassword = async(e) => {
    e.preventDefault();
    if(!email){
      return toast.error("Please provide your email");
    }
    if(!validateEmail(email)){
      return toast.error("Please provide a valid email");
    }

    
    setIsLoading(true);
    const userData = {
      email
    }
    await forgotPassword(userData);
    setEmail("");
    setIsLoading(false);
  }
  return (
    <>
    {isLoading && <Loader />}
       <Auth>
      <h2>Forgot Password</h2>
          <br/>
          <div className='auth-form'>
            <form onSubmit={forgotUserPassword}>
            <div className='form-control'>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <button type='submit' className='btn-success'>Continue</button>
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

export default Forgot
