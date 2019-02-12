import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Tile from '../Tile/';

const shuffleArray = array => {
	// Randomly shuffle the game tiles, using Fisher-Yates algorithm
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		// swap as long as indicies aren't identical:
		if (i !== j) [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	} // Returns a new shuffled array:
	return newArray;
}

const renderTiles = props => {
	// Creating a new array of tiles to avoid mutation:
	const shuffledGameTiles = shuffleArray(props.gameTiles);
	const tileJSX = shuffledGameTiles.map(tile =>
		(<Tile key={tile.id} tile={tile} handleTileClick={props.handleTileClick}></Tile>)
	);
	return tileJSX;
}

function GameArea(props) {
	return (
		<main>
			<Container className='text-center'>
				<Row>
					{renderTiles(props)}
				</Row>
			</Container>
		</main>
	);
}

export default GameArea;