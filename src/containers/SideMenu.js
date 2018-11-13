import React from 'react';
import { Link } from 'react-router-dom'

/* An example React component */
const SideMenu = () => (
 
  
					<div id="sidebar-menu">
					  <ul>
				        <li>
				        	<Link to='/'>
			                <a class="waves-effect">
				                <i class="mdi mdi-contacts"></i>
				                <Link to='/'>Main</Link>
			                </a>
			                </Link>
			            </li>

				        

				        <li>
				        	<Link to='/pst'>
			                <a class="waves-effect">
				                <i class="mdi mdi-contacts"></i>
				                <Link to='/pst'>Pst</Link>
			                </a>
			                </Link>
			            </li>


				      </ul>
					</div>

        
			
)
 
export default SideMenu;