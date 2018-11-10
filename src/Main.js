import React, { Component } from 'react';
import Header from './Header';

/* An example React component */
class Main extends Component {
    render() {
        return (
        	<div>
        		<Header/>
            	<p>This is the main component</p>
        	</div>
        );
    }
}
 
export default Main;