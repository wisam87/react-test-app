import React, { Component } from 'react';
import {withRouter} from 'react-router'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard';
import Pst from './pages/pst/Pst'



class Content extends Component {

    render() {
        return (

        	<div class="content-page">    
		        <div class="content">
			        <div class="container-fluid">
			  
			        	<p>This is Main Dashboard Content</p>

					</div> 
		        </div>

		        <footer class="footer text-right">
		        2018 - Share Registry Management System
		        </footer>

	        </div>
			
				

        );
    }
}
 
export default withRouter(Content);



		