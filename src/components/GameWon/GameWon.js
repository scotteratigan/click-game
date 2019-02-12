import React from 'react';
import { Button, Container } from 'react-bootstrap';

const GameWon = props => {
	return (
		<main>
			<Container className='text-center'>
				<h1>Perfect game!</h1>
				<Button btn-primary="true" className="m-3" onClick={() => props.playAgain()}>Play Again</Button>
			</Container>
		</main>
	);
};

export default GameWon;