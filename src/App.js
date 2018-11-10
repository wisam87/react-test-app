import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';

import Sidebar from './containers/Sidebar'
import Navbar from './containers/Navbar'

import Content from './containers/Content'
import ContentPst from './containers/ContentPst'

import Dashboard from './containers/pages/dashboard/Dashboard';
import Pst from './containers/pages/pst/Pst'

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
        <h1>Hi There</h1>

         
        <Sidebar/>

        
        <Navbar/>

        <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Content}/>
                <Route exact path='/pst' component={ContentPst}/>
              </Switch>
        </BrowserRouter>




      </div>
    );
  }
}

export default App;
