import axios from 'axios';


const intialState = {
    info: []
}



const GET_INFO = "GET_INFO";
const CREATE = "CREATE";
const DELETE_INFO = "DELETE_INFO";
// const UPDATE_INFO = "UPDATE_INFO";


export const getInfo = () => {
    return {
        type: GET_INFO,
        payload: axios.get('/api/info')
    }
}

export const create = (length, location, type, goals, description, details, skills, availability, name, img) => {
    return {
        type: CREATE,
        payload: axios.post('/api/create', {length, location, type, goals, description, details, skills, availability, name, img})
    }
}

export const deleteInfo = (id) => {
    return {
        type: DELETE_INFO,
        payload: axios.delete(`/api/delete/${id}`)
    }
}

// export const updateInfo = () => {
//     return {
//         type: UPDATE_INFO,
//         payload: axios.put()
//     }
// }


export default function crudRed(state = intialState, action){
    switch(action.type){

        case `${GET_INFO}_FULFILLED`:
            return {
                ...state,
                info: action.payload.data
            }

        case `${CREATE}_FULFILLED`:
            return {
                ...state,
                info: action.payload.data
            }
            
        case `${DELETE_INFO}_FULFILLED`:
            return {
                ...state,
                info: action.payload.data
            }    

        default:
        return state;
    }
}