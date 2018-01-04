import React, { Component } from 'react';
import CreateNote from '../CreateNote/CreateNote';
import Notebooks from '../Notebooks/Notebooks';
import './Content.css';

class Content extends Component {
  render() {
    return(
      <div className="container">
        <CreateNote/>
				<Notebooks/>
      </div>
    );
  }
}

export default Content;
