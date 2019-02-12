import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer id='footer'>
			<div className='container-fluid pt-3 pb-2 text-center'>
				<p className='my-0'>A react application by Scott Ratigan</p>
				<a href='https://github.com/scotteratigan/click-game' alt='GitHub Repo' target='_blank' rel='noopener noreferrer' className='px-3 text-white'>
					Source Code
				</a>
				|
				<a href='https://www.linkedin.com/in/scotteratigan/' alt='GitHub Repo' target='_blank' rel='noopener noreferrer' className='px-3 text-white'>
					LinkedIn Profile
				</a>
			</div>
		</footer>
	);
}

export default Footer;