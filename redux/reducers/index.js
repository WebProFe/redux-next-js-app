import {combineReducers }  from 'redux';
import passages from './passagesReducer';
import problems from './problemsReducer';

const rootReducer = combineReducers({
    passages: passages,
    problems:problems,
})

export default rootReducer;