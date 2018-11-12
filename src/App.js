import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header'
import Main from './Main'
import Navbar from './containers/Navbar'

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
        <Navbar/>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
