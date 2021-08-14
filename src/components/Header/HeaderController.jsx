import React from 'react';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';

// eslint-disable-next-line no-unused-vars
const HeaderController = () => (
	<HeaderView test="hi" />
);

export default connect(null, null)(HeaderController);
