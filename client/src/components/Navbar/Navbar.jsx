import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
  
const Navbar = () => {
    
    // for active underline in nav menu
    const [menu, setMenu] = useState('home');
 

  return (
    <div className='navbar'>
      <Link style={{textDecoration: 'none'}} to='/'>
          <div className="nav-logo">
              <img src={logo} alt="" />
              <p>HealthBuddy</p>
          </div>
      </Link>
          <ul className="nav-menu">
              <li onClick={()=>{setMenu('home')}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
              <li onClick={() => { setMenu('community') }}><Link style={{textDecoration: 'none'}} to='/community'>Community</Link>{menu === 'community' ? <hr /> : <></>}</li>
              {/*scroll down for our services on homepage only CHECK THIS*/}
              <li onClick={() => { setMenu('our_services') }}><Link style={{textDecoration: 'none'}} to='/'>Our Services</Link>{menu === 'our_services' ? <hr /> : <></>}</li>  
              {/* CHECK THIS*/}
              <li onClick={()=>{setMenu('contact_us')}}>Contact us{menu==='contact_us'?<hr/>:<></>}</li>
          </ul>
            <div className="nav-login">
              <Link style={{textDecoration: 'none'}} to='/login-signup'><button className="btn">Sign Up</button></Link> 
              <Link style={{textDecoration: 'none'}} to='/login-signup'><button className="btn">Login</button></Link>
              {/* logout button when signed in */}
            </div>
    </div>
  )
}

export default Navbar
