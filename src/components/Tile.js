import React from 'react';
import { Col, Container } from 'react-bootstrap';

function Tile(props) {
	const { clickTile } = props;
	const { id, name, photo } = props.tile;
	return (
		<Col xs={6} sm={4} lg={3} className='my-3' onClick={() => clickTile(id)}>
			<Container className='playerContainer'>
				<img id={id} className='image-fluid playerImage' src={photo} alt={name} />
				<h4 className='playerCaption'>{name}</h4>
			</Container>
		</Col >
	);
}

export default Tile;