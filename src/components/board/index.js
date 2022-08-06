import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';
import baseroute from '../../baseroute';
import board from './board.css';

// Returns a sudoku board
// props
// 	rows = [
//      [
// 			{
// 				value: 2
// 			},
// 			...
//      ],
//      ...
// 	]
const Board = ({ rows }) => {
	const [ boxes, setBoxes ] = useState([
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
		[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	]);

	// useEffect(() => {
	// 	let newBoxes = [];
	// 	rows.forEach((row, rowIndex) => {
			
	// 	});


	// }, [ rows ])

	return (
		<div className={board.board}>
			{boxes.map(box => {
				return (
					<div className={board.box}>
						{box.map((boxRow, boxRowIndex) => {
							return (
								<div className={`${board.boxRow} ${board['boxRow' + boxRowIndex]}`}>
									{boxRow.map((cell, cellIndex) => {
										return (
											<div className={`${board.cell} ${board['cell' + cellIndex]}`}>
												{cell.value}
											</div>
										)
									})}
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
	
}

export default Board;
