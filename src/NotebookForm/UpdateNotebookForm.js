import React, { Component } from 'react';
import './NotebookForm.css';

class UpdateNotebookForm extends Component {
  constructor() {
    super();

    this.handleCancel = this.handleCancel.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);

    this.state = {
      isClose: true
    }
  }

  handleCancel() {
    console.log('close')
    this.setState({ isClose: false });
  }

  updateNotebook(e, key) {
    e.preventDefault();
    console.log('update Submit');
    const notebook = this.props.notebook;
    const updatedNotebook = {
      ...notebook,
      [e.target.name]: e.target.value
    }

    this.props.updateNotebook(key, updatedNotebook);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isClose: true });
  }

  render() {
    return (
      <div>
      { this.state.isClose?
      <form
        className="noteForm noteForm--update"
        onSubmit={(e) => this.updateNotebook(e)}
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
      </form> : null }</div>
    );
  }
}

export default UpdateNotebookForm;
