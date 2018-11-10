import React, { Component } from 'react';
import './App.css';

import Navbar from './containers/Navbar';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';



class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
        <Navbar/>
        <Sidebar/>

        <Content/>
      </div>
    );
  }
}

export default App;
