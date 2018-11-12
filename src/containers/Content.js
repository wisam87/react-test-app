import React, { Component } from 'react';
import {withRouter} from 'react-router'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard';
import Pst from './pages/pst/Pst'

import NormalAccount from './NormalAccount';
import ContentPst from './ContentPst';


class Content extends Component {

    render() {
        return (

        	<main>
			    <Switch>
			      <Route exact path='/' component={NormalAccount}/>
			      <Route path='/pst' component={ContentPst}/>
			    </Switch>
			  </main>
			
				

        );
    }
}
 
export default withRouter(Content);



