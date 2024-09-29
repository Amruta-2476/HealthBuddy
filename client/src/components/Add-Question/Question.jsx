import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import './Question.css';

function Question() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  return (
    <div className="add-question">
      <div className="add-question-container">
        <h1 className="form-title">Ask a Public Question</h1>
        <form className="question-form">
          <div className="form-group">
            <label htmlFor="question-title" className="form-label">Title</label>
            <p className="form-subtext">Be specific and imagine you’re asking a question to another person.</p>
            <input
              id="question-title"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add a title for your question"
            />
          </div>
          <div className="form-group">
            <label htmlFor="question-desc" className="form-label">Description</label>
            <p className="form-subtext">Describe your question in detail. The more information you give, the better answers you’ll get.</p>
            <textarea
              id="question-desc"
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your question description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tags-input" className="form-label">Tags</label>
            <p className="form-subtext">Add tags to describe the category of your question.</p>
            <TagsInput
              id="tags-input"
              value={tags}
              onChange={setTags}
              name="tags"
              placeHolder="Press enter to add a new tag"
              className="tags-input"
            />
          </div>
          <button type="submit" className="submit-button">Submit Your Question</button>
        </form>
      </div>
    </div>
  );
}

export default Question;
