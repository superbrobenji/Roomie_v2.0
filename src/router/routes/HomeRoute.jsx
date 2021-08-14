import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../components/Home';

const HomeRoute = () => (
	<Route path="/home" component={Home} />
);

export default HomeRoute;
