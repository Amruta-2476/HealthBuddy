// Main.js

import React from 'react'
import './CommunityMain.css'
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import AllQuestions from './AllQuestions'

function CommunityMain() {
  return (
    <div className="main">
          <div className="main-container">
              <div className="main-top">
                  <h2>All Questions</h2>
                  <Link to='/add-question'>
                    <button>Ask Question <IoIosAddCircleOutline size={30}/></button>
                  </Link>
              </div>
              <div className="main-desc">
                  <p>no.of questions</p>
                  <div className="main-filter">
                      <div className="main-filter-item">
                          <IoFilterOutline />
                          <p>Filter</p>
                        </div>
                  </div>
              </div>
              <div className="questions">
              <div className="question">
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                    </div>
            </div>
          </div>
    </div>
  )
}

export default CommunityMain
