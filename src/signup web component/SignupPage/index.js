import React from 'react';
import PropTypes from 'prop-types';

import Component from './Signup';
import Wrapper from '../Wrapper';

const Signup = (props) => (
	// eslint-disable-next-line react/jsx-filename-extension, react/jsx-props-no-spreading
	<Wrapper {...props} Component={Component} />
);

export default Signup;

Signup.defaultProps = {
	auth: undefined,
};

Signup.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	auth: PropTypes.object,
	bottomRoute: PropTypes.string.isRequired,
};
