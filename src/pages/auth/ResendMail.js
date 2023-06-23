import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'

const ResendMail = () => {
  return (
    <div>
        <Auth>
        <h2>Resend Verification Mail</h2>
          <br/>
          <div className='auth-form'>
            <div className='form-control'>
                <input type="email" name='email' placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <button className='btn-success'>Resend</button>
            </div>
            <br/>
            <br/>
            <Link to="/forgot-password"><p>Back to Login</p></Link>
          </div>
      </Auth>
    </div>
  )
}

export default ResendMail
