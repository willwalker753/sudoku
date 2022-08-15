import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import Board from '/components/board';
import { generatePuzzle } from '/components/generatePuzzle';
import style from '/routes/home/style.css';

const Home = () => {
	const [ boardRows, setBoardRows ] = useState([]);

	useEffect(() => {
		setBoardRows(
			generatePuzzle()
		);
	}, [])

	return (
		<div class={style.home}>
			<Board rows={boardRows} />
		</div>
	)
};

export default Home;
