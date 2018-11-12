import React, { Component } from 'react';
import {withRouter} from 'react-router'


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard';
import Pst from './pages/pst/Pst'



class NormalAccount extends Component {

    render() {
        return (

        	<div>    
		        <h1>This is NormalAccount</h1>

	        </div>
			
				

        );
    }
}
 
export default NormalAccount;



		