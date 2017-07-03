import { createStore } from "redux"; 


//import the root reducer and default data
import  reducePets from "./reducers/reducePets.js"; 
import  Pets from "./data/pets.js"; 

//create an object for the default data
const defaultState = {
	pets: Pets
}



const store = createStore(reducePets, defaultState); 


export default store;  


//so far we have only initialized the store. 
//we know need to define our root reducer. Most important
//thing. 



