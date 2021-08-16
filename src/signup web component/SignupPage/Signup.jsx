import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';

const Signup = ({ bottomRoute }) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	// errors
	const passwordMissmatch = 'Passwords do no match!';
	// eslint-disable-next-line operator-linebreak
	const signupFail =
		'There was an error creating your account, please try again later!';

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (
			// eslint-disable-next-line operator-linebreak
			passwordConfirmRef.current.value !==
			passwordRef.current.value
		) {
			setError(passwordMissmatch);
			return;
		}
		try {
			setLoading(true);
			setError('');
			await signup(
				emailRef.current.value,
				passwordRef.current.value,
			);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('signup error', err);
			setError(signupFail);
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
								Sign Up
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
								<div className="input-field col s8 offset-s2">
									<input
										ref={passwordConfirmRef}
										id="passwordConfirm"
										type="password"
										className="validate"
									/>
									<label htmlFor="passwordConfirm">
										Confirm Password
									</label>
								</div>
								<div className="row">
									<button
										disabled={loading}
										type="submit"
										className="btn col s4 offset-s4"
									>
										Sign Up
									</button>
									<Link
										className="col s10 offset-s1"
										to={bottomRoute}
									>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										Don't have an account yet?
									</Link>
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

export default Signup;

Signup.propTypes = {
	bottomRoute: PropTypes.string.isRequired,
};
