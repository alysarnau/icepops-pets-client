import apiUrl from "../apiConfig";
import axios from "axios";

// READ => INDEX
export const getAllPets = () => {
    return axios(`${apiUrl}/pets`);
}

// READ => SHOW
export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}

// CREATE
export const createPet = (user, newPet) => {
    // console.log('createPet in API was hit')
    // in our createPet form, we're building an object
    // when we pass that object into the api createPet function, it's going to look like the pets in our database
    // we're going to refer to this as newPet
    // console.log('this is user:', user)
    // console.log('this is newPet', newPet)
	return axios({
		url: apiUrl + '/pets',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
        // since newPet and pet have the same fields, we just have to do this!
		data: { pet: newPet } ,
	})
}

// UPDATE
export const updatePet = (user, updatedPet) => {
    // console.log('createPet in API was hit')
    // in our createPet form, we're building an object
    // when we pass that object into the api createPet function, it's going to look like the pets in our database
    // we're going to refer to this as newPet
    console.log('this is updated pet', updatedPet)
	return axios({
		url: `${apiUrl}/pets/${updatedPet.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
        // since newPet and pet have the same fields, we just have to do this!
		data: { pet: updatedPet } ,
	})
}

// DELETE
export const removePet = (user, petId) => {
    // 
    console.log('this is deleted pet id', petId)
	return axios({
		url: `${apiUrl}/pets/${petId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}