import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './Header.css';

function Header(props) {
	const { score, highScore } = props;
	return (
		<header>
			<Jumbotron fluid className='mb-1 py-4 text-light'>
				<Container className='text-center'>
					<h1>WARRIORS <img id='basketball' className='mx-3' src='images/basketball.png' alt='Basketball autographed by Stephen Curry' />Memory Game</h1>
					<p>Click on a player to start to pass him the ball.<br />
						Test your memory: try to pass to each player only once to win.</p>
					<p> {score ? <> Score: {score} | </> : null}
						High Score: {highScore}{highScore === 12 ? <> (perfect game)</> : null}</p>
				</Container>
			</Jumbotron>
		</header >
	);
}

export default Header;