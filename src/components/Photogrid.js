import React from "react"; 
import { Link } from "react-router-dom"; 
import { withRouter } from "react-router"; 



class Photogrid extends React.Component{

	render(){

			return (

		    <div className="photogrid">

			      <ul>

			        {Object.keys(this.props.pets).map((elm) => <li key={elm}><Link to={`/${this.props.pets[elm].name}`}>{this.props.pets[elm].name}</Link></li>)}
			
			      </ul>	
			
            </div>

         ); 
	}
}

export default withRouter(Photogrid); 
