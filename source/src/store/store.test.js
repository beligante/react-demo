import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as contributorActions from '../actions/contributorActions';

describe('Store', function() {
    it('should handle loading contributors', function() {
        const store = createStore(rootReducer, initialState);
        const contributor = {
            name: 'Luis',
            login: 'beligante'
        };

        //act
        const action = contributorActions.loadContributorsSuccess([contributor]);
        store.dispatch(action);

        //assert
        const actual = store.getState().contributors[0];

        expect(actual).toEqual(contributor);
    });
});
