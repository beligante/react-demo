import * as types from './actionTypes';
import ContributorApi from '../api/mockContributorApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadContributorsSuccess(contributors) {
    return { type: types.LOAD_CONTRIBUTORS_SUCCESS, contributors };
}

export function loadContributors() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return ContributorApi.getAllContributors().then(contributors => {
            dispatch(loadContributorsSuccess(contributors));
        }).catch(error => {
            throw(error);
        });
    };
}
