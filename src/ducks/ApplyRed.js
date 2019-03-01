import axios from 'axios';


const intialState = {
    apply:[]
}


const CREATE_APPLY = "CREATE_APPLY";




export const createApply = (bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three) => {
    return {
        type: CREATE_APPLY,
        payload: axios.post('/api/apply', {bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three})
    }
}


export default function crudRed(state = intialState, action){
    switch(action.type){

        case `${CREATE_APPLY}_FULFILLED`:
            return{
                ...state,
                apply: action.payload.data
            } 

        default:
        return state;
    }
}