import { createStore } from "redux"; 
import  reducePets from "./reducers/reducePets.js"; 
import  pets from "./data/pets.js"; 


const defaultState = { 
	pets
}

const store = createStore(reducePets, defaultState); 

export default store;  


