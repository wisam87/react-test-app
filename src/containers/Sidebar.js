import React, { Component } from 'react';

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
						<ul>
							    <li>
							        <a className="waves-effect"><i className="mdi mdi-view-dashboard"></i> <span>Dashboard</span> </a>
							    </li>

							    <li>
							        <a className="waves-effect"><i className="mdi mdi-view-dashboard"></i> <span>PST</span> </a>
							    </li>

							       
						</ul>
					</div>


        			



        		</div>
        	</div>
			
				

        );
    }
}
 
export default Sidebar;