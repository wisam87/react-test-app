import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Pst from './pages/pst/Pst';

import Content from './Content'
import ContentPst from './ContentPst'

/* An example React component */
class Sidebar extends Component {

    render() {
        return (

        	<div  className="left side-menu">
        		<div className="sidebar-inner slimscrollleft">

        			<div className="user-box" style={{paddingBottom: 0}}>

        				{/* Profile Picture */}
        				<div className="user-img">
						    <img src="/assets/images/mse-box-new.png" alt="user-img" title="Mat Helme" class="rounded-circle img-thumbnail img-responsive" />
						</div>

						{/* User Name */}
						<h5 style={{color: '#98a6ad', textAlign: 'center'}}>Maldives Securities Depository</h5>

						{/* Lock and Logout Button */}
						<ul class="list-inline"  style={{ margin: 0 }}>
						    <li class="list-inline-item">
						        <a href="{{ route('logout') }}" class="">
						            <i class="mdi mdi-power hover-red" style={{ fontSize: '30px' }}></i>
						        </a>
						    </li>
						    <li class="list-inline-item">
						        <a href="{{ route('lock') }}" class="">
						            <i class="mdi mdi-lock hover-orange" style={{ fontSize: '30px' }}></i>
						        </a>
						    </li>
						</ul>

        			</div>

        			{/* SideMenu*/}
					<div id="sidebar-menu">

							<BrowserRouter>
							
							  
							  <ul>
						        <li><Link to='/'>Dashboard</Link></li>
						        <li><Link to='/pst'>PST</Link></li>
						      </ul>

							</BrowserRouter>



					</div>

					  

        			



        		</div>
        	</div>
			
				

        );
    }
}
 
export default Sidebar;