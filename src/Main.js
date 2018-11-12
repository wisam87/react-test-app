import React, { Component } from 'react';
import Home from './Home'
import Roster from './Roster'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* An example React component */
class Main extends Component {
    render() {
        return (
        	<div>
            	<Switch>
			      <Route exact path='/' component={Home}/>
			      <Route path='/roster' component={Roster}/>
    			</Switch>
        	</div>
        );
    }
}
 
export default Main;