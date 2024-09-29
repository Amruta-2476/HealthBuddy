// Sidebar.js

import React from 'react'
import './index.css'
import Maternity from '../Assets/maternity_sidebar_icon.png'


function CommunitySidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className="sidebar-options">
        <h2>Communities</h2>
          <div className="sidebar-option">
            <div className="link-tag">
              <img src={Maternity} alt='Maternity' />
              <a href="/maternity">Maternity</a>
            </div>
          </div>
          <div className="sidebar-option">
            <div className="link-tag">
              <img src={Maternity} alt='Maternity' />
              <a href="/maternity">Senior Citizens</a>
            </div>
          </div>
          <div className="sidebar-option">
            <div className="link-tag">
              <img src={Maternity} alt='Maternity' />
              <a href="/maternity">Working Professionals</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CommunitySidebar
