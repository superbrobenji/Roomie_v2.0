import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from './AuthContext';

const Wrapper = ({
	auth,
	Component,
	bottomRoute,
	user,
	forgotPassRoute,
}) => (
	<AuthProvider auth={auth} user={user}>
		<Component
			bottomRoute={bottomRoute}
			forgotPassRoute={forgotPassRoute}
		/>
	</AuthProvider>
);

export default Wrapper;

Wrapper.defaultProps = {
	forgotPassRoute: undefined,
	user: undefined,
};

Wrapper.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	auth: PropTypes.object.isRequired,
	Component: PropTypes.element.isRequired,
	bottomRoute: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	user: PropTypes.object,
	forgotPassRoute: PropTypes.string,
};
