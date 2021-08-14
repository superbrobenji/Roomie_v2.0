import React from 'react';
import { connect } from 'react-redux';

import Router from './router';
import Header from './components/Header';

const App = () => (
	<React.StrictMode>
		<div className="container">
			<Router Header={Header} />
		</div>
	</React.StrictMode>
);

export default connect(null, null)(App);
