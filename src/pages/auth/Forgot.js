import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';

const Forgot = () => {
  return (
    <>
       <Auth>
      <h2>Forgot Password</h2>
          <br/>
          <div className='auth-form'>
            
            <div className='form-control'>
                <input type="email" name='email' placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <button className='btn-success'>Continue</button>
            </div>
            <br/>
            <br/>
            <Link to="/forgot-password"><p>Back to Login</p></Link>
          </div>
      </Auth>
    </>
  )
}

export default Forgot
