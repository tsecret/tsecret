import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components';

import { Home, Wishlist } from './pages';

const App = () => {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="wishlist" element={ <Wishlist /> } />
			</Routes>
		</Router>
	)
}

export default App;
