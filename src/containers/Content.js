import React, { Component } from 'react';
import DigiformText from './pages/dashboard/Testtext';
import PSTtext from './pages/pst/PstText';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Content extends Component {

    render() {
        return (

        	<div class="content-page">    
		        <div class="content">
			        <div class="container-fluid">
			        	


				          <BrowserRouter>
				            <Switch>
				              <Route path='/' component={DigiformText}/>
				              <Route path='/pst' component={PSTtext}/>
				            </Switch>
				          </BrowserRouter>

					</div> 
		        </div>

		        <footer class="footer text-right">
		        2018 - Share Registry Management System
		        </footer>

	        </div>
			
				

        );
    }
}
 
export default Content;



		