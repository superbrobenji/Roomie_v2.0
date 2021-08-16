import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authPropTypes } from '../helpers/propTypesFactory';

// TODO rebuild to grab user from redux and only if user exists to you allow access to child
export default (ChildComponent) => {
	const ComposedComponent = (props) => {
		const { auth } = props;
		const history = useHistory();
		useEffect(() => {
			if (!auth.loading && !auth.data) {
				return history.push('/');
			}
		}, [auth]);

		return <ChildComponent props={props} />;
	};

	ComposedComponent.propTypes = {
		...authPropTypes,
	};

	const mapStateToProps = ({ auth }) => ({ auth });

	return connect(mapStateToProps)(ComposedComponent);
};
