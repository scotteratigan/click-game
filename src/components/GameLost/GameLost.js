import React from 'react';
import { Container } from 'react-bootstrap';
import Quote from './../Quote/';
import PlayButton from './../PlayButton/';

function GameLost(props) {
	const { score, highScore, lastTileClicked, playAgain } = props;
	return (
		<main>
			<Container className='text-center'>
				<h1>Game over - no championship ring this time.</h1>
				<h2>Your score was {score}
					{score === highScore ? <>, a high score!</> : null}
				</h2>
				<Quote lastTileClicked={lastTileClicked}></Quote>
				<PlayButton playAgain={playAgain} />
			</Container>
		</main>
	);
}

export default GameLost;