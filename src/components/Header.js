import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
// import Score from './Score';

function Header(props) {
	return (
		<header>
			<Jumbotron fluid className='mb-1 py-4'>
				<Container className='text-center'>
					<h1>Clicky Game</h1>
					<p>Click on the squares to play.</p>
					<p>Score: {props.score}</p>
					<p>High Score: {props.highScore}</p>
				</Container>
			</Jumbotron>
		</header>
	);
}

export default Header;