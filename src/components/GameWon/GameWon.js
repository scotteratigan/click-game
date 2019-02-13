import React from 'react';
import { Container } from 'react-bootstrap';
import PlayButton from './../PlayButton/';

const GameWon = props => {
	const { playAgain } = props;
	return (
		<main>
			<Container className='text-center'>
				<h1>Perfect game!</h1>
				<PlayButton playAgain={playAgain} />
			</Container>
		</main>
	);
};

export default GameWon;