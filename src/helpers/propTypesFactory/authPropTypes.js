import PropTypes from 'prop-types';

const authPropTypes = {
	auth: PropTypes.shape({
		data: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.objectOf(
				PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				]),
			),
		]),
		loading: PropTypes.bool.isRequired,
	}).isRequired,
};

export default authPropTypes;
