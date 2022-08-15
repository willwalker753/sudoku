import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect, useState, useLayoutEffect } from 'preact/hooks';
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
	const [ boxes, setBoxes ] = useState([]);
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// 	[ [{ value: 1 }, { value: 2 }, { value: 3 }], [{ value: 4 }, { value: 5 }, { value: 6 }], [{ value: 7 }, { value: 8 }, { value: 9 }] ],
	// ]);

	useLayoutEffect(() => {
		// generate default box array
		let newBoxes = [];
		for (let b=0; b<9; b++) {
			newBoxes.push([]);
			for (let r=0; r<9/3; r++) {
				newBoxes[b].push([]);
				for (let c=0; c<9/3; c++) {
					newBoxes[b][r].push({
						value: 0
					})
				}
			}
		}
		setBoxes(newBoxes);
	}, [])

	useEffect(() => {
		if (rows.length === 0) return;

		// format rows prop to boxes
		let newBoxes = [ ...boxes ];
		rows.forEach((row, rowIndex) => {
			row.forEach((col, colIndex) => {
				const boxIndex = (Math.floor(rowIndex / 3) * 3) + (Math.floor(colIndex / 3));
				const boxRowIndex = rowIndex % 3;
				const boxColIndex = colIndex % 3;
				newBoxes[boxIndex][boxRowIndex][boxColIndex].value = col.value;
			});
		});
		setBoxes(newBoxes);
	}, [rows])

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
												{cell.value > 0 ? cell.value : null}
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
