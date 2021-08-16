import React from 'react';
import PropTypes from 'prop-types';

import Component from './Login';
import Wrapper from '../Wrapper';

const Login = (props) => (
	// eslint-disable-next-line react/jsx-filename-extension, react/jsx-props-no-spreading
	<Wrapper {...props} Component={Component} />
);

export default Login;

Login.defaultProps = {
	auth: undefined,
};

Login.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	auth: PropTypes.object,
	bottomRoute: PropTypes.string.isRequired,
};
