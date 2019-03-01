import axios from 'axios';

const intialState = {
    user: {},
    isLoading: false
}



// naming my functions
const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_USER = "GET_USER";



//functions 
export const login = (username, password) => {
    return{
        type: LOGIN,
        payload: axios.post('/auth/login', {username, password})
    }
}

export const register = (username, password, email, first_name, last_name) => {
    return {
        type: REGISTER,
        payload: axios.post('/auth/register',{username,password,email,first_name,last_name})
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: axios.get('auth/logout')
    }
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user')
    }
}


//this where they get exported 
export default function UsersRed(state = intialState, action){
    // console.log(action.payload)
    switch(action.type){
        case `${LOGIN}_FULFILLED`:
        return{
            ...state,
            user: action.payload.data
        }

        case `${REGISTER}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        case `${LOGOUT}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                user: action.payload.data
            }

        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user: action.payload.data
            }    

        default:
        return state;
    } 
}