import React from "react"; 
import { Link } from "react-router-dom"; 
import { withRouter } from "react-router"; 
import Thumbnail from "./Thumbnail.js"



// {Object.keys(this.props.pets).map((elm) => <li key={elm}><Link to={`/${this.props.pets[elm].name}`}>{this.props.pets[elm].name}</Link></li>)}



class Photogrid extends React.Component{

	render(){

			return (

		    <div className="photogrid">

			      <ul className="imagelist">

			        {Object.keys(this.props.pets)
			        	   .map((elm) => 
				        		<li key={elm}>
					        		<Link to={`/${this.props.pets[elm].name}`}>
					        		    <Thumbnail pet={this.props.pets[elm]}/>
					        		</Link>
				        		</li>)
				    }
			
			      </ul>	
			
            </div>

         ); 
	}
}

export default withRouter(Photogrid); 
