// index.js
import Community_Sidebar from '../components/CommunityComponents/CommunitySidebar'
import Community_Main from '../components/CommunityComponents/CommunityMain'

import React from 'react'

const Community = () => {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Community_Sidebar />
        <Community_Main />
      </div>
    </div>
  )
}

export default Community
