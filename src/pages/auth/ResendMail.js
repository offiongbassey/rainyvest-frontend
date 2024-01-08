import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Auth from '../../components/Auth/Auth'
import { resendVerificationMail, validateEmail } from '../../services/authService';
import Loader from "../../components/loader/Loader";

const ResendMail = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resendMail = async(e) => {
  e.preventDefault();
    if(!email){
      return toast.error("Please provide your Email");
    }
    if(!validateEmail(email)){
      return toast.error("Please provide a valid email");
    }
  const userData = {
    email
  }
  setIsLoading(true);
  await resendVerificationMail(userData);
  setEmail("");
  setIsLoading(false);

  }
  return (
    <div>
      {isLoading && <Loader />}
        <Auth>
        <h2>Resend Verification Mail</h2>
          <br/>
          <div className='auth-form'>
            <form onSubmit={resendMail}>
            <div className='form-control'>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <button type='submit' className='btn-success'>Resend</button>
            </div>
            <br/>
            <br/>
            <Link to="/login"><p>Back to Login</p></Link>
            </form>
          </div>
          
      </Auth>
    </div>
  )
}

export default ResendMail
