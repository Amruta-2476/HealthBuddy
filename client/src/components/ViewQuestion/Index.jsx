import React from 'react'
import MainQuestion from './MainQuestion'
import CommunitySidebar from '../CommunityComponents/CommunitySidebar'


function Index() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <CommunitySidebar/>
        <MainQuestion/>
      </div>
    </div>
  )
}

export default Index

