import React from 'react';
import { Button, Container } from 'react-bootstrap';

// todo: add win condition based on score here.

function GameLost(props) {
	return (
		<main>
			<Container className='text-center'>
				<h1>GAME OVER MAN :/</h1>
				<h2>Your score was {props.score}</h2>
				<Button btn-primary="true" className="m-3" onClick={() => props.playAgain()}>Play Again</Button>
			</Container>
		</main>
	);
}

export default GameLost;