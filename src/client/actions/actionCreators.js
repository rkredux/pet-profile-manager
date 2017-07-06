//action creators are functions that dispatch 
// actions about what happened and what needs to change
// in the app



//User interactions with pet profile 
export function removePet(petIndex){
	return {
		type:"REMOVE_PET", 
		petIndex
	}
}
//totally delete the pet


export function editProfile(petId, field, newInput){
	return {
		type:"EDIT_PROFILE", 
		petId, 
		field, 
		newInput
	}
}
//edit pet specific details such as age, name, breed, image etc.


export function addComment(petId, comment){
	return {
		type:"ADD_COMMENT", 
		petId, 
		comment 
	}
}
//add new comment


export function removeComment(petId, commentIndex){
	return {
		type:"REMOVE_COMMENT", 
		petId, 
		commentIndex		
	}
}
//remove an existing comment



//User interactions to create a new pet profile
export function createPet(petId){
	return {
		type:"CREATE_PET", 
		petId
	}
}















