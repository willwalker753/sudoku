import { h } from 'preact';
import { Link } from 'preact-router/match';
import baseroute from '../../baseroute';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Preact Boilerplate</h1>
		<nav>
			<Link activeClassName={style.active} href={`${baseroute}/`}>Home</Link>
			<Link activeClassName={style.active} href={`${baseroute}/about`}>About</Link>
		</nav>
	</header>
);

export default Header;
