import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function MainQuestion() {
  // const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState("");
  const user = useSelector(selectUser)
  const [questionData, setQuestionData] = useState();

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const handleAnswerAdd = (value) => {
    setAnswer(value);
  }

  useEffect(() => {
    async function getQuestionDetails() {
      await axios.get(`/api/question/${id}`).then((res) => {
        console.log(res.data[0]);
        setQuestionData(res.data[0]);
      }).catch((err) => {
        console.log(err);
      })
    }
    getQuestionDetails();
  }, [id]);

  async function getUpdatedAnswer() {
    await axios.get(`/api/question/${id}`).then((res) => {
      console.log(res.data[0]);
      setQuestionData(res.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  const handleSubmit = async() => {
    if (answer !== "") {
      const body = {
        question_id: id,
        answer: answer,
        user: user
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      await axios.post('/api/answer', body, config).then((res) => {
        console.log(res.data);
        alert("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      }).catch((err) => {
        console.log(err);
        alert("Error occured while adding answer");
      })
    }
  }

  return (
    <div className="main-q">
      <div className="main-container-q">
        <div className="main-top-q">
          <h2 className="main-question-q">{questionData?.title}</h2>
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
              <p>{questionData?.body}  
              </p>
              <div className="author-q">
                <span>Asked by:</span> &nbsp; &nbsp;
                <FaUserCircle className="user-avatar-q" />
                <p className="username-q">{questionData?.user?.displayName ? questionData?.user?.displayName : String(questionData?.user?.email).split('@')[0]}</p>
                <small className="timestamp-q">{new Date(questionData?.created_at).toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div className="all-answers">
          <p className="no_of_answers">{questionData?.answerDetails?.length} answer(s)</p>
          {
            questionData?.answerDetails?.map((_q) => (
              <div key={_q?._id} className="all-answers-container">
              <div className="answer">
                <div className="author-q-answer">
                  <FaUserCircle className="user-avatar-q-answer" />
                  <p className="username-q-answer">{_q?.user?.displayName ? _q?.user?.displayName : String(_q?.user?.email).split('@')[0]}</p>
                  <small className="timestamp-q">{new Date(_q?.created_at).toLocaleDateString()} </small>
              </div>
              <p>{_q?.answer}</p>
              </div>
            </div>
            ))
            }
            
        </div>

        {/* Add an Answer */}
        <div className="main-answer">
          <h3>Your answer</h3>
          <textarea
            value={answer}
            onChange={(e) => handleAnswerAdd(e.target.value)}
            placeholder="Add your answer" 
            style={{height: '100px'}}
            type='text'
            className="react-quill"/>
         <button type="submit" onClick={handleSubmit} className="submit-button">Submit your answer</button>
        </div>
      </div>
    </div>
  );
}

export default MainQuestion;
