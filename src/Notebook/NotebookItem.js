import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notebook from './Notebook';
import UpdateNotebookForm from '../NotebookForm/UpdateNotebookForm';
import './Notebook.css';

class NotebookItem extends Component {
  constructor() {
    super();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      isOpen: false
    }
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
    const { notebook, notebookId } = this.props;

    return (
      <li className="notebookItem">
        <Link to={`/${notebookId}`}
              className="notebookItem__link"
        >{ notebook.title }</Link>
        <div className="notebookItem__func">
          <span>{ notebook.num } items | { notebook.created_at } created</span>
          <a
            onClick={(e) => this.open(e)}
            href="#"
            className="notebookItem__link notebookItem__link--edit"
          >Edit</a>
        </div>
        { this.state.isOpen ?
        <UpdateNotebookForm
          updateNotebook={this.props.updateNotebook}
          notebook={ notebook }
          notebooks={ this.props.notebooks }
          notebookId={ this.props.notebookId }
          open={ this.open }
          close={ this.close }
        /> : null }
      </li>
    );
  }
}

export default NotebookItem;
