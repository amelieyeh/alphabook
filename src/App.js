import React, { Component } from 'react';
import base from './base';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CreateNote from './CreateNote/CreateNote';
import Notebook from './Notebook/Notebook';
import './App.css';

class App extends Component {
  constructor() {
    super();

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

  render() {
    return (
      <div className="app">
        <Header/>
	      <div className="container">
  	      <CreateNote/>
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
