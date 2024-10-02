import React from "react";
// import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";

function MainQuestion() {
  // const [show, setShow] = useState(false);

  return (
    <div className="main-q">
      <div className="main-container-q">
        <div className="main-top-q">
          <h2 className="main-question-q">this is question title ?</h2>
        </div>
        <div className="main-desc-q">
          <div className="info-q">
            <p>Asked on timestamp</p>
            <p>Viewed <span>43 times</span></p>
          </div>
        </div>

        <div className="all-questions-q">
          <div className="all-questions-container-q">
            <div className="all-questions-left-q">
              <div className="all-options-q">
                <p className="arrow-q">▲</p>
                <p className="arrow-q">.0</p>
                <p className="arrow-q">▼</p>
              </div>
            </div>
            <div className="question-answer-q">
              <p>this is question description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quo harum tempore. 
              <br/>
              <br/>
              <div className="tags-container">
                <span className='question-tags'>working professional</span>
                <span className='question-tags'>adults</span>
              </div>
              </p>
              <div className="author-q">
                <FaUserCircle className="user-avatar-q" />
                <p className="username-q">user name</p>
                <small className="timestamp-q">asked on date</small>
              </div>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div className="all-answers">
          <p className="no_of_answers">no of. answers</p>
            <div className="all-answers-container">
              <div className="answer">
                <div className="author-q">
                  <FaUserCircle className="user-avatar-q" />
                  <p className="username-q">user name</p>
                  <small className="timestamp-q">answered on date </small>
              </div>
              <p>answer body Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tempora laboriosam earum odio dignissimos expedita velit ex suscipit rem odit?</p>
              </div>
              <div className="answer">
                <div className="author-q">
                  <FaUserCircle className="user-avatar-q" />
                  <p className="username-q">user name</p>
                  <small className="timestamp-q">answered on date </small>
                </div>
                <p>answer body Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tempora laboriosam earum odio dignissimos expedita velit ex suscipit rem odit?</p>
              </div>
            </div>
        </div>

        {/* Add an Answer */}
        <div className="main-answer">
          <h3>Your answer</h3>
          <textarea
            placeholder="Add your answer" 
            style={{height: '100px'}}
            type='text'
            className="react-quill"/>
         <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default MainQuestion;
