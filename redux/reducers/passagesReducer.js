import * as types from '../actions/types';
import initialState from './initialState';

export default function passagesReducer(state = initialState.passages, action)  {

    switch (action.type) {
        case types.LOAD_PASSAGES_SUCCESSS:
            console.log(action.payload.data.passages)
            return {...state, passages: action.payload.data.passages};
        case types.LOAD_MORE_PASSAGES:
            console.log(action.payload.data.passages)
            // const pageTwo= action.payload.data.passages
            // const newArray = [...pageTwo, ...state.passages].reduce((res, data, index, arr) =>{
            //     if (res.findIndex(book => book.code === data.code ) < 0) { 
            //         res.push(data);
              
            //     }  
            //     return res;
            // }, [])
            return {...state, passages: [ ...state.passages, ...action.payload.data.passages]}
        default:
            return state;
    }
    
}