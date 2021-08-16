import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';

const Login = ({ bottomRoute, forgotPassRoute }) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	// ERRORS
	// eslint-disable-next-line operator-linebreak
	const LogInFail =
		'login details were incorrect. Please try again!';

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setLoading(true);
			setError('');
			await login(
				emailRef.current.value,
				passwordRef.current.value,
			);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('login error', err);
			setError(LogInFail);
		}
		setLoading(false);
	};

	return (
		<>
			<div className="container row">
				<div className="col s10 offset-s1">
					<div className="card center">
						<div className="card-content">
							<span className="card-title">
								Log In
							</span>
							<form
								onSubmit={handleSubmit}
								className="row"
							>
								<div className="input-field col s8 offset-s2">
									<input
										ref={emailRef}
										id="email"
										type="email"
										className="validate"
									/>
									<label htmlFor="email">Email</label>
								</div>
								<div className="input-field col s8 offset-s2">
									<input
										ref={passwordRef}
										id="password"
										type="password"
										className="validate "
									/>
									<label htmlFor="password">
										Password
									</label>
								</div>
								<div className="row">
									<button
										disabled={loading}
										type="submit"
										className="btn col s4 offset-s4"
									>
										Log In
									</button>
									<Link to={forgotPassRoute}>
										Forgot password?
									</Link>
									<div className="col s10 offset-s1">
										Need an account?
										<Link to={bottomRoute}>
											{/* eslint-disable-next-line react/no-unescaped-entities */}
											Sign Up
										</Link>
									</div>
									<h6
										style={{ marginTop: '20px' }}
										className="red-text col s10 offset-s1"
									>
										{error}
									</h6>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;

Login.propTypes = {
	bottomRoute: PropTypes.string.isRequired,
	forgotPassRoute: PropTypes.string.isRequired,
};
