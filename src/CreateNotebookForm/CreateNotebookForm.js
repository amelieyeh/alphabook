import React, { Component } from 'react';
import './CreateNotebookForm.css';

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
        className="create create--note"
      >
        <label htmlFor="create_note" className="create__label">Create New Notebook</label>
        <input
          ref={(input) => this.title = input}
          type="text"
          id="create_note"
          placeholder="Notebook title"
          className="create__input"
        />
        <div className="create__select">
          <select
            ref={(input) => this.language = input}
          >
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <button type="submit" className="button">Create</button>
      </form>
    );
  }
}

export default CreateNotebookForm;
