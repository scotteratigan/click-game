import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Quote from './../Quote/';

function GameLost(props) {
	const { score, highScore, lastTileClicked } = props;
	return (
		<main>
			<Container className='text-center'>
				<h1>Game over - no championship ring this time.</h1>
				<h2>Your score was {score}
					{score === highScore ? <>, a high score!</> : null}
				</h2>
				<Quote lastTileClicked={lastTileClicked}></Quote>
				<Button btn-primary="true" className="m-3" onClick={() => props.playAgain()}>Play Again</Button>
			</Container>
		</main>
	);
}

export default GameLost;