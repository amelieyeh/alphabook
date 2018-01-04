import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
