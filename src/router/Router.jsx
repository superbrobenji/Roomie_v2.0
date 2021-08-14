import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LandingRoute, HomeRoute } from './routes';

const Routes = ({ Footer, Header }) => (
	<BrowserRouter>
		<div>
			{Header ? <Header /> : null}
			<LandingRoute />
			<HomeRoute />
			{Footer ? <Footer /> : null}
		</div>
	</BrowserRouter>
);

export default Routes;

Routes.defaultProps = {
	Footer: undefined,
	Header: undefined,
};

Routes.propTypes = {
	Footer: PropTypes.element,
	Header: PropTypes.element,
};
