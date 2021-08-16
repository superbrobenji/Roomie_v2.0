import React from 'react';
import PropTypes from 'prop-types';

import Component from './ForgotPassword';
import Wrapper from '../Wrapper';

const ForgotPassword = (props) => (
	// eslint-disable-next-line react/jsx-filename-extension, react/jsx-props-no-spreading
	<Wrapper {...props} Component={Component} />
);

export default ForgotPassword;

ForgotPassword.defaultProps = {
	auth: undefined,
};

ForgotPassword.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	auth: PropTypes.object,
	bottomRoute: PropTypes.string.isRequired,
};
