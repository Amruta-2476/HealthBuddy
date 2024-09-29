// index.js
import CommunitySidebar from '../components/CommunityComponents/CommunitySidebar'
import CommunityMain from '../components/CommunityComponents/CommunityMain'

import React from 'react'

const Community = () => {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <CommunitySidebar />
        <CommunityMain />
      </div>
    </div>
  )
}

export default Community
