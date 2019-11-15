import * as types from '../actions/types';
import initialState from './initialState';

export default function problemsReducer(state = initialState.problems, action)  {

    switch (action.type) {
        case types.LOAD_PROBLEMS_SUCCESSS:
            return action.payload
        default:
            return state;
    }
    
}