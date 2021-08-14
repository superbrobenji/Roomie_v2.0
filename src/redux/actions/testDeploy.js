import axios from 'axios';
import { TEST_DEPLOY } from '../types';

const testDeploy = () => async (dispatch) => {
	const res = await axios.get('/api/explore');
	dispatch({ type: TEST_DEPLOY, payload: res.data });
};

export default testDeploy;
