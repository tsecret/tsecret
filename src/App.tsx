import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components';

import { Home, Wishlist } from './pages';

const App = () => {

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route exact path="/wishlist" component={ Wishlist } />
			</Switch>
		</Router>
	)
}

export default App;
