import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Sidebar from './containers/Sidebar';
import DashboardContent from './containers/Content';



class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
        <Navbar/>
        <Sidebar/>

      
        <BrowserRouter>
          <Switch>
            <Route path='/' component={DashboardContent}/>
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
