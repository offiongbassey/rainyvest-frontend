import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';

const ResetPassword = () => {
  return (
    <>
       <Auth>
      <h2>Change Password</h2>
          <br/>
          <div className='auth-form'>
            
            <div className='form-control'>
                <input type="password" name='password' placeholder='Password' />
            </div>
            <div className='form-control'>
                <input type="password" name='confirmPassword' placeholder='Confirm Password' />
            </div>
            <div className='form-control'>
                <button className='btn-success'>Change Password</button>
            </div>
            <br/>
            <br/>
            <Link to="/forgot-password"><p>Back to Login</p></Link>
          </div>
      </Auth>
    </>
  )
}

export default ResetPassword
