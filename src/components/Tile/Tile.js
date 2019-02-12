import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Tile.css';

function Tile(props) {
	const { handleTileClick } = props;
	const { id, name, photo } = props.tile;
	return (
		<Col xs={6} sm={4} lg={3} className='my-3' onClick={() => handleTileClick(id)}>
			<Container className='playerContainer'>
				<h6 className='playerNumber'>{id}</h6>
				<img id={id} className='image-fluid playerImage' src={photo} alt={name} />
				<h4 className='playerCaption'>{name}</h4>
			</Container>
		</Col >
	);
}

export default Tile;