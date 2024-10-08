import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./Question.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import axios from "axios";

function Index() {
  const user = useSelector(selectUser)
  const [loading, setLoading] = useState(false);


  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && body !== "") {
      setLoading(true);
      const bodyJSON = {
        title: title,
        body: body,
        tags: JSON.stringify(tags),
        user: user
      };
      await axios.post('/api/question', bodyJSON).then((res) => {
        alert("Question added successfully");
        setLoading(false);
        navigate("/community");
      }).catch((err) => {
        alert("Error occured while adding question");
        setLoading(false);
      })
    }
  };

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            {/* Title Section */}
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person.
                </small>
                <input
                  className="form-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter title of your question"
                />
              </div>
            </div>

            {/* Body Section */}
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question.
                </small>
                <textarea
                  className="form-textarea"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter your question description"
                />
              </div>
            </div>

            {/* Tags Section */}
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about.
                </small>
                <TagsInput
                  value={tags}
                  onChange={setTags}
                  name="tags"
                  placeHolder="Press enter to add a new tag"
                  className="tags-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button disabled={loading} type="submit" onClick={handleSubmit} className="submit-button">{
          loading ? "Adding..." : "Add your question"
        }
        </button>
      </div>
    </div>
  );
}

export default Index;
