import React, { Component } from 'react';
// import Home from '../Home'
import Dashboard from './pages/dashboard/Dashboard'
import Pst from './pages/pst/Pst'
import {  Switch, Route } from 'react-router-dom';


/* An example React component */
class Content extends Component {
    render() {
        return (
        	

            <div class="content-page">    
                <div class="content">
                    <div class="container-fluid">
              
                        <div>
                            <Switch>
                              <Route exact path='/' component={Dashboard}/>
                              <Route path='/pst' component={Pst}/>
                            </Switch>
                        </div>

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