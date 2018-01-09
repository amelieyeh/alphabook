import React, { Component } from 'react';
import './NotebookForm.css';

class UpdateNotebookForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      isClose: true
    }
  }

  handleChange(e) {
    const notebook = this.props.notebook;
    const updatedNotebook = {
      ...notebook,
      [e.target.title]: e.target.value
    }

    this.updateNotebook(notebook);
  }

  handleCancel() {
    console.log('close')
    this.setState({ isClose: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isClose: true });
  }

  render() {
    const { notebook } = this.props;

    return (
      <div>
      { this.state.isClose?
      <form
        ref={(form) => this.updateNotebookForm = form}
        onSubmit={(e) => this.updateNotebook(e)}
        className="noteForm noteForm--update"
      >
        <input
          ref={(input) => this.title = input}
          onChange={(e) => this.handleChange(e)}
          name="title"
          type="text"
          id="update_note"
          placeholder="Notebook title"
          value={notebook.title}
          className="noteForm__input"
          />
        <div className="noteForm__select">
          <select
            ref={(input) => this.language = input}
            onChange={(e) => this.handleChange(e)}
            name="language"
            value={notebook.language}
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
