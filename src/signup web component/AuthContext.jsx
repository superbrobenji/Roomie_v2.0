import React, {
	useContext,
	useState,
	useEffect,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({
	children,
	auth,
	user,
}) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = (email, password) =>
		// eslint-disable-next-line implicit-arrow-linebreak
		auth.createUserWithEmailAndPassword(
			email,
			password,
		);
	const login = (email, password) =>
		// eslint-disable-next-line implicit-arrow-linebreak
		auth.signInWithEmailAndPassword(email, password);

	const resetPassword = (email) =>
		// eslint-disable-next-line implicit-arrow-linebreak
		auth.sendPasswordResetEmail(email);

	useEffect(() => {
		setCurrentUser(user);
		setLoading(false);
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		resetPassword,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

AuthProvider.defaultProps = {
	user: undefined,
};

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	auth: PropTypes.object.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	user: PropTypes.object,
};
