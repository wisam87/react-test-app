import React, { Component } from 'react';
import Header from './Header';
import SweetAlert from 'sweetalert-react';
import { Button } from 'react-bootstrap';


/* An example React component */
class Mug extends Component {

	  constructor() {
   
		    super();
		    //Initialize the state in the constructor
		    this.state = {
		    }
		  }



    render() {
        return (
        	<div>
        	<Header/>
		      <Button onClick={() => this.setState({ show: true })}>Alert</Button>
		      <SweetAlert
		        show={this.state.show}
		        title="Demo"
		        text="SweetAlert in React"
		        onConfirm={() => this.setState({ show: false })}
		      />
		    </div>
        );
    }
}
 
export default Mug;