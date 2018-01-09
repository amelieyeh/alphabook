import React, { Component } from 'react';
import './NotebookForm.css';

class CreateNotebookForm extends Component {
  createNotebook(e) {
    e.preventDefault();
    console.log('Notebook!');

    const notebook = {
      title: this.title.value,
      language: this.language.value,
      created_at: new Date().toISOString().substring(0, 10)
    }

    this.props.addNotebook(notebook);
    this.notebookForm.reset();
  }

  render() {
    return(
      <form
        ref={(form) => this.notebookForm = form}
        onSubmit={(e) => this.createNotebook(e)}
        className="noteForm noteForm--create"
      >
        <label htmlFor="create_note" className="noteForm__label">Create New Notebook</label>
        <input
          ref={(input) => this.title = input}
          type="text"
          id="create_note"
          placeholder="Notebook title"
          className="noteForm__input"
        />
        <div className="noteForm__select">
          <select
            ref={(input) => this.language = input}
          >
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <button type="submit" className="noteForm__button">Create</button>
      </form>
    );
  }
}

export default CreateNotebookForm;
