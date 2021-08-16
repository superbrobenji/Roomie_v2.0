import React from 'react';

// import LandingView from './LandingView';
// import Signup from '../../signup web component/SignupPage';
// TODO convert to webcomponents
import ForgotPassword from '../../signup web component/ForgotPasswordPage';
import Signup from '../../signup web component/SignupPage';
import Login from '../../signup web component/LoginPage';
import { auth } from '../../config/firebase';

const LandingController = () => (
	<>
		{/* <Signup auth={auth} bottomRoute="/home" /> */}
		{/* //TODO add user to this as a prop user={user} from redux. same with signup page */}
		<ForgotPassword auth={auth} bottomRoute="/home" />
		<Login
			auth={auth}
			bottomRoute="/home"
			forgotPassRoute="/home"
		/>
		<Signup auth={auth} bottomRoute="/home" />
	</>
);

export default LandingController;
