import { h } from 'preact';
import { Router } from 'preact-router';
import baseroute from './baseroute';

import Header from './components/header';
import Home from './routes/home';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path={`${baseroute}/`} />
		</Router>
	</div>
)

export default App;
