import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Tile from './Tile';

const shuffleArray = (array) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		if (i !== j) {
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
	}
	return newArray;
}

function GameArea(props) {
	const gameTiles = props.gameTiles;
	const shuffledGameTiles = shuffleArray(gameTiles);
	let tileJSX = [];
	shuffledGameTiles.forEach(tile => {
		// console.log('tile is:', tile);
		tileJSX.push(<Tile key={tile.id} tile={tile} clickTile={props.clickTile}></Tile>);
	});
	return (
		<main>
			<Container className='text-center'>
				<Row>
					{tileJSX}
				</Row>
			</Container>
		</main>
	);
}

export default GameArea;