import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Wishlist } from './pages';

const App = () => {

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route exact path="/wishlist" component={ Wishlist } />
			</Switch>
		</Router>
	)
}

export default App;
