import * as types from './types';
import * as passagesApi from "../../api/passagesApi";

export function loadPassagesSuccess(passages) {
    return { type: types.LOAD_PASSAGES_SUCCESSS,
            payload: passages
        }
}

export function loadMorePassages(page) {
    return { type: types.LOAD_MORE_PASSAGES,
             payload: page
    }
}


export function loadPassages() {

    return function (dispatch) {
        return passagesApi.getPassages().then( passages => {
            dispatch(loadPassagesSuccess(passages));
        }).catch( error => {
            throw error;
        })
    }
}

export function loadMorePages(page) {
    return function (dispatch) {
        return passagesApi.getPassages(page).then(page => {
            dispatch(loadMorePassages(page))
        }).catch( error => {
            throw error;
        })
    }
}