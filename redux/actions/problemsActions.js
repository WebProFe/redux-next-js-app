import * as types from './types';
import * as problemsApi from "../../api/problemsApi";

export function loadProblemsSuccess(problems) {
    return { type: types.LOAD_PROBLEMS_SUCCESSS,
            payload: problems
        }
}

export function loadProblems() {
    return function (dispatch) {
        return problemsApi.getProblems().then( problems => {
            dispatch(loadProblemsSuccess(problems));
        }).catch( error => {
            throw error;
        })
    }
}