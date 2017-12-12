import expect from 'expect';
import * as contributorActions from './contributorActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';



describe('Contributor Actions', () => {
    describe('load contributors successs', () => {
        const contributors = [];
        const expectedAction = {
            type: types.LOAD_CONTRIBUTORS_SUCCESS,
            contributors
        };

        const action = contributorActions.loadContributorsSuccess(contributors);

        expect(action).toEqual(expectedAction);
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_CONTRIBUTORS_SUCCESS when loading contributors', (done) => {

        const expectedActions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.LOAD_CONTRIBUTORS_SUCCESS,
                body: {
                    contributors:  []
                }
            }
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(contributorActions.loadContributors()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect( actions[1].type).toEqual(types.LOAD_CONTRIBUTORS_SUCCESS);
            done();
        });
    });
});
