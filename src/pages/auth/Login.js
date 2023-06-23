import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';

const Login = () => {
  return (
    <>
      <Auth>
      <h2>Login to Continue</h2>
          
          <div className='auth-form'>
            <div className='form-control'>
                <input type="email" name='email' placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <input type="password" name='password' placeholder='Password' />
            </div>
            <div className='form-control'>
                <button className='btn-success'>Login</button>
            </div>
            <br/>
            <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
            
            <br/>
            <Link to="/forgot-password"><p>Forgot Password</p></Link>
          </div>
      </Auth>
    </>
  )
}

export default Login
