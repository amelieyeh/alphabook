import React, { Component } from'react';
import './Notebook.css';

class Notebook extends Component {
  render() {
    const { notebook } = this.props;

    return (
      <li className="notebook">
        <a href="#" className="notebook__link">{ notebook.title }</a>
        <div className="notebook__func">
          <span>{ notebook.num } items | { notebook.created_at } created</span>
          <a href="#" className="notebook__link notebook__link--edit">Edit</a>
        </div>
      </li>
    );
  }
}

export default Notebook;
