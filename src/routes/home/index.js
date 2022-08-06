import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import Board from '/components/board';
import style from '/routes/home/style.css';

const Home = () => {
	const [ boardRows, setBoardRows ] = useState([]);

	useEffect(() => {
		setBoardRows([
			[
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' }
			],
			[
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' },
				{ value: '0' }
			]
		])
	}, [])

	return (
		<div class={style.home}>
			<Board rows={boardRows} />
		</div>
	)
};

export default Home;
