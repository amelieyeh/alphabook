import React, { Component } from 'react';
import sampleData from '../data';
import Notebook from './Notebook';
import './Notebooks.css';

class Notebooks extends Component {
  constructor() {
    super();

    this.state = {
      notebooks: sampleData,
      notebook: {}
    }
  }

  render() {
    return(
      <ul className="notebooks">
        {
          Object.keys(this.state.notebooks)
                .map(key => <Notebook key={key}  notebook={this.state.notebooks[key]} />)
        }
      </ul>
    );
  }
}

export default Notebooks;
