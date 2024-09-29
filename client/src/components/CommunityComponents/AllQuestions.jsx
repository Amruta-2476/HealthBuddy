import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import './index.css'

function AllQuestions() {
  return (
    <>
     <div className="all-questions">
          <div className="all-questions-container">
          <div className="all-questions-left">
          <div className="all-options">
          <div className="all-option">
              <p>0</p>
              <span>answers</span>
            </div>
            </div>
              </div>
              <div className="question-answer">
                  <Link to='/view-question'>this is question title ?</Link>
                  <div style={{
                      width: '90%',
                  }}>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, sit?</div>
                  </div>
                  <div className="question-bottom">
              <div className="tags-container">
                <span className='question-tags'>working professional</span>
                <span className='question-tags'>adults</span>
              </div>
              <div className="author-details">
                <FaUserCircle className="user-avatar" />
                <p className="username">User name</p>
                <small className="timestamp">asked 8 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to = '/view-question'>this is question title ?</Link>
            <div style={{ width: '90%' }}>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo dolor, hic iure adipisci dolore illum aperiam harum nemo voluptatem facere quod a libero exercitationem, rem consectetur cupiditate aspernatur voluptatibus!</div>
            </div>
            <div className="question-bottom">
              <div className="tags-container">
                <span className='question-tags'>maternity</span>
                <span className='question-tags'>adults</span>
              </div>
              <div className="author-details">
                <FaUserCircle className="user-avatar" />
                <p className="username">User name</p>
                <small className="timestamp">asked on 24/9/24</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllQuestions;