import { bindActionCreators } from "redux"; 
// import React from "react"; 
import { connect } from "react-redux"; 
import * as actionCreators from "../client/actions/actionCreators.js"; 
import Main from "./Main.js"; 
import { withRouter } from "react-router"; 
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function mapStateToProps(state){
	return {
		pets: state.pets
		
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch); 
}


const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))


	




export default App; 
