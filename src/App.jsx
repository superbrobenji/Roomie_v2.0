import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Router from './router';
import Header from './components/Header';
import { auth } from './config/firebase';

const App = () => {
	// TODO add user to redux
	// const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(() => {
			// setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);
	return (
		<React.StrictMode>
			<div className="container">
				{!loading && <Router Header={Header} />}
			</div>
		</React.StrictMode>
	);
};

export default connect(null, null)(App);
