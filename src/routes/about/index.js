import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from '/routes/about/style.css';

const About = ({ user }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.profile}>
			<h1>About</h1>

			<p>Current time: {new Date(time).toLocaleString()}</p>

			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				&nbsp;
				Clicked {count} times
			</p>
		</div>
	);
}

export default About;
