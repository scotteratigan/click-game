import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tile from './Tile';

function GameArea() {
	let tileArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let tileJSX = [];
	tileArray.forEach(tile => {
		tileJSX.push(<Tile></Tile>);
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