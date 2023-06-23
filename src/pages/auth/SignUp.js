import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';

const SignUp = () => {
  return (
    <>
      <Auth>
          <h2>Create a Free Account</h2>
          
          <div className='auth-form'>
            <div className='form-control'>
                <input type="text" name='firstName' placeholder='First Name' />
            </div>
            <div className='form-control'>
                <input type="text" name='lastName' placeholder='Last Name' />
            </div>
            <div className='form-control'>
                <input type="text" name='phone' placeholder='Phone Number' />
            </div>
            <div className='form-control'>
                <input type="email" name='email' placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <input type="password" name='password' placeholder='Password' />
            </div>
            <div className='form-control'>
                <input type="password" name='confirmPassword' placeholder='Confirm Password' />
            </div>
            <div className='form-control'>
                <button className='btn-success'>Create Account</button>
            </div>
            <br/>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <br/>
            <p><Link to="/resend">Resend Verification Mail</Link></p>
          </div>
      </Auth>
    </>
  )
}

export default SignUp
