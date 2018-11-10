import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Digiform from './Digiform';
import Mug from './Mug';



class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
        <h1>Hi There</h1>

      
        <BrowserRouter>
          <Switch>
            <Route path='/main' component={Main}/>
            <Route path='/digiform' component={Digiform}/>
            <Route path='/mug' component={Mug}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
