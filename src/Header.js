import React from 'react';
import { Link } from 'react-router-dom'


/* An example React component */
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/main'>Main</Link></li>
        <li><Link to='/digiform'>Digiform</Link></li>
        <li><Link to='/mug'>Mug</Link></li>
      </ul>
    </nav>
  </header>
)
 
export default Header;