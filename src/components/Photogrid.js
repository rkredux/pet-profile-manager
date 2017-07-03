import React from "react"; 
import { Link } from "react-router-dom"; 


class Photogrid extends React.Component{

	render(){

		return (

		    <div className="photogrid">

			      <ul>
			      	 <li><Link to="/pet1">Pet 1</Link></li>
			      	 <li><Link to="/pet2">Pet 2</Link></li>
			      	 <li><Link to="/pet3">Pet 3</Link></li>
			      	 <li><Link to="/pet4">Pet 4</Link></li>
			      	 <li><Link to="/pet5">Pet 5</Link></li>
			      	 <li><Link to="/pet6">Pet 6</Link></li>
			      </ul>	
			
            </div>

         ); 
	}
}

export default Photogrid; 
