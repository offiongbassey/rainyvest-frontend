import React from 'react';
import "./Auth.css";

const Auth = ({children}) => {
  return (
    <div className='auth'>
         <div className='r_auth'>
         <br/>
                    {children}
         </div>   
    </div>
  )
}

export default Auth
