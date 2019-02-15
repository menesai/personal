import axios from 'axios';


const intialState = {
    info: [],
    // singleInfo: []
}



const GET_INFO = "GET_INFO";
const CREATE = "CREATE";
const DELETE_INFO = "DELETE_INFO";
const GET_PROJECT = "GET_PROJECT"
// const UPDATE_INFO = "UPDATE_INFO";


export const getInfo = () => {
    return {
        type: GET_INFO,
        payload: axios.get('/api/info')
    }
}

// export const getProject = (id) => {
//     return{
//         type: GET_PROJECT,
//         payload: axios.get(`/api//api/project/${this.props.match.params.id}`)
//     }
// }

export const create = (name, type, length, location, details, img, description, goals, availability, skills) => {
    return {
        type: CREATE,
        payload: axios.post('/api/create', {name, type, length, location, details, img, description, goals, availability, skills})
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
        case `${GET_PROJECT}_FULFILLED`:
        return {
            ...state,
            singleInfo: action.payload.data
        }        

        default:
        return state;
    }
}