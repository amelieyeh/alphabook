import React, { Component } from 'react';
import base from './base';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CreateNotebookForm from './NotebookForm/CreateNotebookForm';
import Notebook from './Notebook/Notebook';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.addNotebook = this.addNotebook.bind(this);

    this.state = {
      notebooks: {},
      words: {}
    }
  }

	componentWillMount() {
    this.ref = base.syncState(`user1/notebooks`,
      {
        context: this,
        state: 'notebooks'
      }
    );
    /*
    this.ref = base.database().ref(`user1/`).on('child_added', (snapshot) => {
      const notebooks = snapshot.val();
      this.setState({
        notebooks: notebooks
      });
    });*/
	}

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addNotebook(notebook) {
    // update state
    const notebooks = {...this.state.notebooks};
    // add new notebook
    const timestamp = Date.now();
    notebooks[`notebook-${timestamp}`] = notebook;
    // set state
    this.setState({ notebooks });
  }

  render() {
    return (
      <div className="app">
        <Header/>
	      <div className="container">
  	      <CreateNotebookForm addNotebook={this.addNotebook}/>
          <ul className="notebooks">
            {
              Object
                .keys(this.state.notebooks)
                .map(key => <Notebook key={key} notebook={this.state.notebooks[key]} />)
            }
          </ul>
     		</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
