import React from 'react';
import PropTypes from 'prop-types';

const HeaderView = ({ test }) => (
	<>
		<nav>
			<div className="nav-wrapper">
				 hi
				{' '}
				{test}
			</div>
		</nav>
	</>
);

export default HeaderView;

HeaderView.propTypes = {
	test: PropTypes.string.isRequired,
};
