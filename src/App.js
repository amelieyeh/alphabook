import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CreateNotebookForm from './NotebookForm/CreateNotebookForm';
import NotebookItem from './Notebook/NotebookItem';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header/>
	      <div className="container">
  	      <CreateNotebookForm addNotebook={this.props.addNotebook}/>
          <ul className="notebooks">
            {
              Object
                .keys(this.props.notebooks)
                .map(key => <NotebookItem key={key} notebookId={key} notebook={this.props.notebooks[key]} updateNotebook={this.props.updateNotebook} notebooks={this.props.notebooks}/>)
            }
          </ul>
     		</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
