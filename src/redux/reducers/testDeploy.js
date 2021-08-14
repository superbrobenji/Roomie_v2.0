import { TEST_DEPLOY } from '../types';

export default (state = null, action) => {
	switch (action.type) {
		case TEST_DEPLOY:
			return {
				data: action.payload || false,
			};
		default:
			return state;
	}
};
