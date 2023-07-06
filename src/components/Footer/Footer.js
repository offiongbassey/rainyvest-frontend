import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";
import {MdShareLocation, MdOutlineMarkEmailRead} from "react-icons/md";
import {BsTelephoneX} from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='r_card'>
          <div className='c_card'>
            <h1>Rainy<span>Vest</span></h1>
            <p>RainyVest is an Agric Product Invesment Company that offers Buying and Selling of Products  with just little service charge.</p>
          </div>
          <div className='c_card'>
            <h2>Links</h2>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/how-it-work"><li>How It Works</li></Link>
            </ul>
          </div>

          <div className='c_card'>
            <h2>Contact Us</h2>
            <ul>
              <li><MdShareLocation size={20} /> 42 Murtala Mohamed Highway, Calabar</li>
              <li><MdOutlineMarkEmailRead size={20}/> info@rainyvest.com</li>
              <li><BsTelephoneX size={20} /> +234 8089245421</li>
            </ul>
          </div>
        </div>
        
        </div>
        <hr />
        <div className='text-center'>
            <Link to="https://dribbble.com/offiongbassey"><h4>Developed By Offiong Bassey</h4></Link>
        </div>
    </div>
  )
}

export default Footer