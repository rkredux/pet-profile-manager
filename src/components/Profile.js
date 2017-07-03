import React from "react"; 
import { Link } from "react-router-dom"; 

class Profile extends React.Component{

	render(){
		return(
		<div>
		     <p>{`Hey its me. Remember your ${this.props.match.params.petId}`}</p>
		     <button><Link to="/">Back to gallery</Link></button>
		</div>
		); 

		}
}

export default Profile; 