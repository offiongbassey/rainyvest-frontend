import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import {toast} from "react-toastify";
import Loader from "../../components/loader/Loader";
// import { useDispatch } from 'react-redux';
import { registerUser, validateEmail } from '../../services/authService';

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUp = () => {
  // const dispath = useDispatch();
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const {firstName, lastName, email, phone, password, confirmPassword} = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const register = async (e) => {
    e.preventDefault();
    if(!firstName){
      return toast.error("First Name is required");
    }
    if(!lastName){
      return toast.error("Last Name is required");
    }
    if(!phone){
      return toast.error("Phone Number is required");
    }
    if(!email){
      return toast.error("Please provide your Email");
    }
    if(!validateEmail(email)){
      return toast.error("Please provide a valid Email");
    }
    if(!password){
      return toast.error("Please provide your Password");
    }
    if(password !== confirmPassword){
      return toast.error("Passwords do not match");
    }
    setIsLoading(true);

    const userData = {
      firstName, lastName, phone, email, password, confirmPassword
    }

    try {
        await registerUser(userData);
        setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
    


  }

  return (
    <div>
    {isLoading && <Loader />}
      <Auth>
          <h2>Create a Free Account</h2>
          
          <div className='auth-form'>
            <form onSubmit={register}>
            <div className='form-control'>
                <input type="text" name='firstName' value={firstName} onChange={handleInputChange} placeholder='First Name' />
            </div>
            <div className='form-control'>
                <input type="text" name='lastName' value={lastName} onChange={handleInputChange} placeholder='Last Name' />
            </div>
            <div className='form-control'>
                <input type="text" name='phone' value={phone} onChange={handleInputChange} placeholder='Phone Number' />
            </div>
            <div className='form-control'>
                <input type="text" name='email' value={email} onChange={handleInputChange} placeholder='Email Address' />
            </div>
            <div className='form-control'>
                <input type="password" name='password' value={password} onChange={handleInputChange} placeholder='Password' />
            </div>
            <div className='form-control'>
                <input type="password" name='confirmPassword' value={confirmPassword} onChange={handleInputChange} placeholder='Confirm Password' />
            </div>
            <div className='form-control'>
                <button type='submit' className='btn-success'>Create Account</button>
            </div>
            </form>
            <br/>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <br/>
            <p><Link to="/resend">Resend Verification Mail</Link></p>
          </div>
      </Auth>
    </div>
  )
}

export default SignUp
