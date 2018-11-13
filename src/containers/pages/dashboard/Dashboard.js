import React, { Component } from 'react';

import Statistics from '../../../components/Statistics'
import ProfileCard from '../../../components/ProfileCard'



class Dashboard extends Component {
    render() {
        return (


            <div className="row">

                <Statistics amount="900" name="Test Statistics"/>

                <ProfileCard 
                	image_path="assets/images/users/avatar-9.jpg"
                	desc="Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                	fullname="Johnathan Deo"
                	contact_no="(123) 123 1234"
                	email="coderthemes@gmail.com"
                	location="USA"
                />

                

            </div>
            
        );
    }
}
 
export default Dashboard;