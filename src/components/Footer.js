import React from 'react';
import { Button } from 'react-bootstrap';

function Footer() {
	return (
		<footer className="App-header">
			<div className="container-fluid pt-5 pb-2 text-center bg-light">
				<a href="https://github.com/scotteratigan/click-game" alt="GitHub Repo" target="_blank" rel="noopener noreferrer">
					<Button btn-primary="true" className="mx-3">View Project Source Code</Button>
				</a>
				<a href="https://www.linkedin.com/in/scotteratigan/" alt="GitHub Repo" target="_blank" rel="noopener noreferrer">
					<Button btn-primary="true" className="mx-3">LinkedIn Profile</Button>
				</a>
			</div>
		</footer>
	);
}

export default Footer;