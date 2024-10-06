import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import './index.css'

function AllQuestions({ question }) {

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  let tags = [];
if (question?.tags && typeof question.tags[0] === 'string') {
  try {
    // Remove extra escaping by using JSON.parse twice if needed
    tags = JSON.parse(question.tags[0].replace(/\\/g, ''));
  } catch (error) {
    console.error("Error parsing tags:", error);
    tags = [];  // Fallback to empty array if parsing fails
  }
}

  return (
    <>
     <div className="all-questions">
          <div className="all-questions-container">
          <div className="all-questions-left">
          <div className="all-options">
          <div className="all-option">
                <p>{question?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            </div>
              </div>
              <div className="question-answer">
                  <Link to={`/question?q=${question?._id}`}>{question?.title}</Link>
                  <div style={{
                      width: '90%',
                  }}>
                  <div>{truncate(question?.body, 170)}</div>
                  </div>
            <div className="question-bottom">
              <div className="tags-container">
                {tags.map((_tag, index) => (
                <div key={index}>
                  <span className="question-tags">{_tag}</span>
                </div>
              ))}
              </div>
            
              <div className="author-details">
                <FaUserCircle className="user-avatar" />
                <p className="username">{question?.user?.displayName ? question?.user?.displayName : String(question?.user?.email).split('@')[0]}</p>
                <small className="timestamp">{new Date(question?.created_at).toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllQuestions;