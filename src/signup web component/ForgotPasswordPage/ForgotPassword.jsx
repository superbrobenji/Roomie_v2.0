import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext';

const ForgotPassword = ({ bottomRoute }) => {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	// ERRORS
	// eslint-disable-next-line operator-linebreak
	const resetPasswordFail =
		'Failed to reset password!';

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setMessage('');
			setLoading(true);
			setError('');
			await resetPassword(emailRef.current.value);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('reset password error', err);
			setError(resetPasswordFail);
		}
		setMessage(
			'Check your email inbox to reset you password!',
		);
		setLoading(false);
	};

	return (
		<>
			<div className="container row">
				<div className="col s10 offset-s1">
					<div className="card center">
						<div className="card-content">
							<span className="card-title">
								Reset Password
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
								<div className="row">
									<button
										disabled={loading}
										type="submit"
										className="btn col s4 offset-s4"
									>
										Reset Password
									</button>
									<div className="col s10 offset-s1">
										Have an account?
										<Link to={bottomRoute}>
											{/* eslint-disable-next-line react/no-unescaped-entities */}
											Log In
										</Link>
									</div>
									<h6
										style={{ marginTop: '20px' }}
										className="red-text col s10 offset-s1"
									>
										{error}
									</h6>
									<h6
										style={{ marginTop: '20px' }}
										className="green-text col s10 offset-s1"
									>
										{message}
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

export default ForgotPassword;

ForgotPassword.propTypes = {
	bottomRoute: PropTypes.string.isRequired,
};
