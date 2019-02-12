import React from 'react';
// import { Blockquote } from 'react-bootstrap';

function Quote(props) {
	const { quote, name } = props.lastTileClicked;
	return (
		<blockquote className='blockquote text-left'>
			<p className='mb-0'>
				<em>{quote}</em>
			</p>
			<footer className='blockquote-footer mb-3'>{name}</footer>
		</blockquote>
	);
}

export default Quote;