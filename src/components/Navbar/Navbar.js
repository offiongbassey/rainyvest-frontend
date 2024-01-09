import React, { useState } from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import {BiCategoryAlt} from "react-icons/bi";
import {AiOutlineCloseCircle, AiOutlineBars} from "react-icons/ai";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <header className='header'>
      <div className='container d_flex'>
        <Link to="/">
          <div className='categories d_flex'>
          <span className='fa-solid fa-border-all'></span>
          <h4><BiCategoryAlt size={20} />RainyVest  </h4>
        </div>
        </Link>

        <div className='navlink'>
          <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">How It Works</Link>
            </li>
            <li>
              <Link to="/login"> <button className='btn-success-out'>Sign In </button> </Link>
            </li>
            <li>
              <Link to="/signup"><button className='btn-success'>Sign Up</button></Link>
            </li>
          </ul>
          <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
            {
              MobileMenu? <AiOutlineCloseCircle className='close' size={30} />  : <AiOutlineBars className='open' size={30} />
            }

          </button>

        </div>

      </div>

    </header>
  )
}

export default Navbar
