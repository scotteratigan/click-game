import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function Header() {
	return (
		<header>
			<Jumbotron fluid>
				<Container className="text-center">
					<h1>Clicky Game</h1>
					<p>Click on the squares to play.</p>
				</Container>
			</Jumbotron>
		</header>
	);
}

export default Header;