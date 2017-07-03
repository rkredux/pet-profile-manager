import React from "react"; 
import Photogrid from "./Photogrid.js"; 
import Profile from "./Profile.js"; 
import Upload from "./Upload.js";
import { Link, Route } from "react-router-dom"; 
import '../styles/App.css';

class Main extends React.Component{

	render(){
		return (
			<div className="main">

				<h1>
				   <Link to="/">My Pets</Link>
				</h1>

				<Route exact path="/" component={Photogrid}/>

				<Route path={`${/:petId/}`} component={Profile}></Route>
				<Upload></Upload>
			</div>
         ); 
    }
}

export default Main;  