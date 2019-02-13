import React from 'react';
import './PlayButton.css';

const PlayButton = props => {
	return (
		<button className='btn m-3' id='playButton' onClick={() => props.playAgain()}>Play Again</button>
	);
};

export default PlayButton;