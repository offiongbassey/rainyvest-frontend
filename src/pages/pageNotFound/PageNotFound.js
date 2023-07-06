import React from 'react';
import { Link } from 'react-router-dom';
import pageImage from "../../assets/notfound.svg"
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <div className='not-found'>
      <h1>Page not found</h1>
      <p>Sorry, we could't find the page you're looking for. Please check your spelling.</p>
      <br/>
      <br/>
      <br/>
      <img src={pageImage} alt="page not found"/>
      <br/>
      <br/>
      <br/>
    <Link to="/"><button className='btn-success-out'>Back to Home</button>  </Link>
    </div>
  )
}

export default PageNotFound
