import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Auth from '../../components/Auth/Auth';
import Loader from '../../components/loader/Loader';
import { changePin } from '../../services/authService';

const initialState = {
  pin: "",
  confirmPin: ""
}
const ChangePin = () => {
  const [formData, setFormData] = useState(initialState);
  const {pin, confirmPin} = formData;
  const [isLoading, setIsLoading] = useState(false);
  const {token} = useParams();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const updatePin = async(e) => {
    e.preventDefault();
    if(!pin){
      return toast.error("Please provide New Pin");
    }
    if(pin !== confirmPin ){
      return toast.error("Pins do not match");
    }
    const userData = {
      pin,
      confirmPin
    }

    setIsLoading(true);
    try {
      await changePin({token, userData});
      setIsLoading(false);  
    } catch (error) {
      setIsLoading(false);
    }
  }
  return (
    <>
    {isLoading && <Loader />}
       <Auth>
      <h2>Change PIN</h2>
          <br/>
          <div className='auth-form'>
            <form onSubmit={updatePin}>
            <div className='form-control'>
                <input type="password" name='pin' value={pin} onChange={handleInputChange} placeholder='PIN' />
            </div>
            <div className='form-control'>
                <input type="password" name='confirmPin' value={confirmPin} onChange={handleInputChange} placeholder='Confirm PIN' />
            </div>
            <div className='form-control'>
                <button type='submit' className='btn-success'>Change PIN</button>
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

export default ChangePin
