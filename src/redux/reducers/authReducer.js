import { FETCH_USER } from '../types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				data: action.payload || false,
				loading: false,
			};
		default:
			return state;
	}
};
