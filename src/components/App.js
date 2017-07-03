import { bindActionCreators } from "redux"; 
import { connect } from "react-redux"; 
import * as actionCreators from "../client/actions/actionCreators.js"; 
import Main from "./Main.js"; 


function mapStateToProps(state){
	return {
		pets: state.pets
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch); 
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main); 

export default App; 
