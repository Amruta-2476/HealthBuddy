import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./Question.css";

function Index() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tag),
        // Assuming there's user data you want to include in bodyJSON
      };
      // You can proceed with the API call or any other logic here.
      console.log("Form submitted", bodyJSON);
      alert("Question added successfully");
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
                  value={tag}
                  onChange={setTag}
                  name="tags"
                  placeHolder="Press enter to add a new tag"
                  className="tags-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="submit-button">
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Index;
