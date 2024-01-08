import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import Loader from '../../components/loader/Loader';
import { verifyUser } from '../../services/authService';

const ConfirmEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        setIsLoading(true);
        async function verifyUserAccount(){
            await verifyUser(token);
            navigate("/login");
        }verifyUserAccount();

    },[token, navigate])

  return (
    <div>
        {isLoading && <Loader />}
       <Auth>
        <h2>Verify Email</h2>
          <br/>
          <div className='auth-form'>
            <br/>
            <br/>
            <Link to="/login"><p>Back to Login</p></Link>
          </div>
      </Auth>
    </div>
  )
}

export default ConfirmEmail
