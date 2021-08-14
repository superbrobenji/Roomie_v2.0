import React from 'react';
import { Route } from 'react-router-dom';

import Landing from '../../components/Landing';

const LandingRoute = () => (
	<Route exact path="/">
		<Landing />
	</Route>
);

export default LandingRoute;
