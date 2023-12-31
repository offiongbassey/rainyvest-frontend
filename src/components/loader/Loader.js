import React from 'react';
import loaderImg from "../../assets/loader7.gif";
import ReactDOM from "react-dom";
import "./Loader.css";

const Loader = () => {
    return ReactDOM.createPortal(
        <div className='wrapper'>
            <div className='loader'>
                <img src={loaderImg} alt="Loading..."/>
            </div>
        </div>,
        document.getElementById("loader")
    )
  }
  export const SpinerImg = () => {
      return (
          <div className='text-center'>
              <img src={loaderImg} alt="Loading..."/>
          </div>
      );
  }
  export default Loader
