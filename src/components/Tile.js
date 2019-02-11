import React from 'react';
import { Col, Container } from 'react-bootstrap';
// import testPic from './../../public/images/andre_iguodala';

function Tile(props) {
	const captionStyle = {
		position: 'relative',
		top: 30,
		color: 'blue'
		// textShadow: {
		// 	textShadowColor: 'black',
		// 	textShadowOffset: { width: -4, height: 1 },
		// 	textShadowRadius: 14,
		// }
		// textShadowColor: 'black',
		// textShadowOffset: { width: -1, height: 1 },
		// textShadowRadius: 10
	};

	const { clickTile } = props;
	const { id, name, photo } = props.tile;
	return (
		<Col xs={4} lg={3} className='m-3' onClick={() => clickTile(id)}>
			<Container className='text-center'>
				<h4 style={captionStyle} >{name}</h4>
				<img id={id} className='my-3' src={photo} alt={name} />


				{/* className='shadow-sm p-3 mb-5 bg-black rounded' */}

				{/* <Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={photo} alt={name} />
				<Card.Body>
					<Card.Title style={captionStyle}>{name}</Card.Title>
				</Card.Body>
			</Card> */}
			</Container>
		</Col >
	);
}

export default Tile;