import { h } from 'preact';
import { Router } from 'preact-router';
import baseroute from './baseroute';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path={`${baseroute}/`} />
			<About path={`${baseroute}/about`} />
		</Router>
	</div>
)

export default App;
