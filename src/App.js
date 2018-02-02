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
    this.updateNotebook = this.updateNotebook.bind(this);

    this.state = {
      notebooks: {},
      notebook: {},
      words: {},
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

  updateNotebook(notebookId, updatedNotebook) {
    const notebooks = {...this.state.notebooks};
    notebooks[notebookId] = updatedNotebook;
    base.update(`user1/notebooks/${notebookId}`, {
      data: {
        title: updatedNotebook.title,
        language: updatedNotebook.language
      },
    });

    this.setState({
      notebooks: notebooks,
    });
  }

  render() {
    // console.log("==========")
    // console.log(this.state.notebooks)
    // console.log("==========")
    return (
      <div className="app">
        <Header/>
	      <div className="container">
  	      <CreateNotebookForm addNotebook={this.addNotebook}/>
          <ul className="notebooks">
            {
              Object
                .keys(this.state.notebooks)
                .map(key => <Notebook key={key} notebookId={key} notebook={this.state.notebooks[key]} updateNotebook={this.updateNotebook} notebooks={this.state.notebooks}/>)
            }
          </ul>
     		</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
