import React, { Component } from 'react';



const ProfileCard = (props) => (
  
		<div className="col-xl-3 col-md-6">
			<div className="text-center card-box">
				<div>
					<img src={props.image_path} class="rounded-circle thumb-xl img-thumbnail m-b-10" alt="profile-image"/>

					<p class="text-muted font-13 m-b-30">
		                {props.desc}
		            </p>

		            <div class="text-left">
		                <p class="text-muted font-13"><strong>Full Name :</strong> <span class="m-l-15">{props.fullname}</span></p>

		                <p class="text-muted font-13"><strong>Mobile :</strong><span class="m-l-15">{props.contact_no}</span></p>

		                <p class="text-muted font-13"><strong>Email :</strong> <span class="m-l-15">{props.email}</span></p>

		                <p class="text-muted font-13 m-b-5"><strong>Location :</strong> <span class="m-l-15">{props.location}</span></p>

		            </div>
				</div>
			</div>
		</div>
            
)
 
export default ProfileCard;


							
