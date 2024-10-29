// index.js
import CommunitySidebar from '../components/CommunityComponents/CommunitySidebar'
import CommunityMain from '../components/CommunityComponents/CommunityMain'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Community = () => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function getQuestions() {
      await axios.get('/api/question').then((res) => { 
        console.log(res.data)
        setQuestions(res.data.reverse())
      }).catch((err) => {
        console.log(err)
      })
    }
    getQuestions()
  }, [])

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <CommunitySidebar />
        <CommunityMain questions={questions} />
      </div>
    </div>
  )
}

export default Community
