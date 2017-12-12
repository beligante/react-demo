import { combineReducers} from 'redux';
import contributors from './contributorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    contributors,
    ajaxCallsInProgress
});

export default rootReducer;
