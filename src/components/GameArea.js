import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Tile from './Tile';

function GameArea(props) {
	const gameTiles = props.gameTiles;
	let tileJSX = [];
	gameTiles.forEach(tile => {
		console.log('Redering tile:', tile);
		console.log('Text is:', tile.text);
		tileJSX.push(<Tile key={tile.id} id={tile.id} label={tile.text} clickTile={props.clickTile}></Tile>);
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