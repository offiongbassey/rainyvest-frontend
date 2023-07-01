import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_LOGIN, SET_ROLE, SET_USERNAME } from '../../redux/features/auth/authSlice';
import { logoutUser } from '../../services/authService';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = async() => {
        await logoutUser();
        await dispatch(SET_LOGIN(false));
        await dispatch(SET_ROLE(''));
        await dispatch(SET_USERNAME(''));
        navigate('/login');

    }
  return (
    <>
      <button onClick={logout} className='btn-success-out'>Logout</button>
    </>
  )
}

export default LogoutButton
