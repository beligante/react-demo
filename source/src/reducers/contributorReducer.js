import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.contributors, action) {
    switch (action.type) {
        case types.LOAD_CONTRIBUTORS_SUCCESS:
            return action.contributors;
        default:
            return state;
    }
}
