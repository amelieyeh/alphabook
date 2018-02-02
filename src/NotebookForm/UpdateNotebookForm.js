import React, { Component } from 'react';
import './NotebookForm.css';

class UpdateNotebookForm extends Component {
  constructor() {
    super();

    this.handleCancel = this.handleCancel.bind(this);
    this.updatedNotebook = this.updatedNotebook.bind(this);

  }

  handleCancel() {
    this.props.close();
  }

  updatedNotebook(e, notebookId) {
    e.preventDefault();
    const notebook = this.props.notebooks[this.props.notebookId]
    const updatedNotebook = {
      ...notebook,
      // [e.target.name]: e.target.value
      title: e.target.title.value,
      language: e.target.language.value
    }
    // const updatedNotebook = {
    //   title: e.target.title.value,
    //   language: e.target.language.value
    // };
    this.props.updateNotebook(notebookId, updatedNotebook);
    this.props.close();
  }

  render() {
    const notebookId = this.props.notebookId;

    return (
      <div>
      <form
        className="noteForm noteForm--update"
        onSubmit={(e) => this.updatedNotebook(e, notebookId)}
      >
        <input
          name="title"
          type="text"
          id="update_note"
          placeholder="Notebook title"
          className="noteForm__input"
          />
        <div className="noteForm__select">
          <select
            name="language"
          >
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <button
          onClick={ this.handleCancel }
          type="button"
          className="noteForm__button noteForm__button--cancel"
        >Cancel</button>
        <button type="submit" className="noteForm__button">Save</button>
      </form></div>
    );
  }
}

export default UpdateNotebookForm;
