import React from "react"; 
import Photogrid from "./Photogrid.js"; 
import Profile from "./Profile.js"; 
import Upload from "./Upload.js";
import { Link, Route } from "react-router-dom"; 
import '../styles/App.css';


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';





class Main extends React.Component{

	constructor(props){
		super(props); 
		this.PhotoRoute = this.PhotoRoute.bind(this); 
	}


	PhotoRoute(){
		return (<Photogrid pets={this.props.pets}></Photogrid>); 
	}


	render(){

		return (

			

			<div className="main">
				<h1>
				   <Link to="/">My Pets</Link>
				</h1>
				<Route exact path="/" component={this.PhotoRoute}></Route>
				<Route path={`${/:petId/}`} component={Profile}></Route>
			</div>

        ); 
    }
}

export default Main;  

