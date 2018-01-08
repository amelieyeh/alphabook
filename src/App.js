import React, { Component } from 'react';
import base from './base';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CreateNotebookForm from './CreateNotebookForm/CreateNotebookForm';
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

	componentDidMount() {
    this.ref = base.database().ref(`user1/`).on('child_added', (snapshot) => {
      const notebooks = snapshot.val();
      this.setState({
        notebooks: notebooks
      });
    });

    /*base.ref(`user1/`).on('child_added', (snapshot) => {
      const notebooks = snapshot.val();
      console.log(notebooks);
      this.setState({ notebooks: notebooks });
    });*/
	}

  componentWillUnmount() {
    base.database().ref().off(this.ref);
  }

  componentWillReceiveProps(nextProps) {}

  addNotebook(notebook) {
    // update state
    const notebooks = {...this.state.notebooks};
    // add new notebook
    const timestamp = Date.now();
    /*notebooks[`notebook-${timestamp}`] = notebook;*/

    // write data to firebase
    const notebookData = {
      title: notebook.title,
      language: notebook.language,
      created_at: notebook.created_at
    }
    const update = {};
    update[`notebook-${timestamp}`] = notebookData;

    this.setState({ notebooks });
    return base.database().ref(`user1/notebooks`).update(update);
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
