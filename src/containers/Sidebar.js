import React from 'react';
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu'

/* An example React component */
const Sidebar = () => (
 
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

        			<SideMenu/>

        		</div>
        	</div>
			
)
 
export default Sidebar;