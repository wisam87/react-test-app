import React, { Component } from 'react';



const Statistics = (props) => (
  
		<div class="col-xl-3 col-md-6">
            <div class="card-box widget-user">
                <div class="text-center">
                    <h2 class="text-custom" data-plugin="counterup">{props.amount}</h2>
                    <h5>{props.name}</h5>
                </div>
            </div>
        </div>
            
)
 
export default Statistics;


							