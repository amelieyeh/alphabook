import React, { Component } from 'react';
import './CreateNote.css';

class CreateNote extends Component {
  render() {
    return(
      <form className="create create--note">
        <label htmlFor="create_note" className="create__label">Create New Notebook</label>
        <input type="text" id="create_note" placeholder="Notebook title" className="create__input"/>
        <div className="create__select">
          <select>
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <button type="submit" className="button">Create</button>
      </form>
    );
  }
}

export default CreateNote;
