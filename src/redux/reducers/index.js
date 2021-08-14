import { combineReducers } from 'redux';
import authReducer from './authReducer';
import testDeploy from './testDeploy';

export default combineReducers({
	auth: authReducer,
	test: testDeploy,
});
