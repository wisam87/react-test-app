import React, { Component } from 'react';
import Home from './Home'
import Roster from './Roster'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


/* An example React component */
class Main extends Component {
    render() {
        return (
        	

            <div class="content-page">    
                <div class="content">
                    <div class="container-fluid">
              
                        <div>
                            <Switch>
                              <Route exact path='/' component={Home}/>
                              <Route path='/roster' component={Roster}/>
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
 
export default Main;