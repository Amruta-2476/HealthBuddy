import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [, setMenu] = useState('home'); // Only use setMenu and ignore the menu variable

  return (
    <div className='navbar'>
      <Link style={{textDecoration: 'none'}} to='/'>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>HealthBuddy</p>
        </div>
      </Link>
      <ul className="nav-menu">
        <li onClick={() => setMenu('home')}><Link style={{textDecoration: 'none'}} to='/'>Home</Link></li>
        <li onClick={() => setMenu('community')}><Link style={{textDecoration: 'none'}} to='/community'>Community</Link></li>
        <li onClick={() => setMenu('our_services')}><Link style={{textDecoration: 'none'}} to='/'>Our Services</Link></li>
        <li onClick={() => setMenu('contact_us')}>Contact us</li>
      </ul>
      <div className="nav-login">
        <Link style={{textDecoration: 'none'}} to='/auth'><button className="btn">Register</button></Link> 
        <Link style={{textDecoration: 'none'}} to='/auth'><button className="btn">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
