import React, { Component } from 'react';
import UpdateNotebookForm from '../NotebookForm/UpdateNotebookForm';
import './Notebook.css';

class Notebook extends Component {
  constructor() {
    super();

    this.updateNotebook = this.updateNotebook.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      isOpen: false
    }
  }

  updateNotebook() {
    this.setState({ isOpen: false });
  }

  open(e) {
    e.preventDefault();
    this.setState({ isOpen: true });
    console.log('open')
  }

  close() {
    this.setState({ isOpen: false });
    console.log('close')
  }

  render() {
    const { notebook } = this.props;

    return (
      <li className="notebook">
        <a href="#" className="notebook__link">{ notebook.title }</a>
        <div className="notebook__func">
          <span>{ notebook.num } items | { notebook.created_at } created</span>
          <a
            onClick={(e) => this.open(e)}
            href="#"
            className="notebook__link notebook__link--edit"
          >Edit</a>
        </div>
        { this.state.isOpen?
        <UpdateNotebookForm
          unpdateNotebook={this.updateNotebook}
          notebook={ notebook }
          open={this.open}
          close={this.close}
          isOpen={this.state.isOpen}
        /> : null }
      </li>
    );
  }
}

export default Notebook;
