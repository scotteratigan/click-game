import React from 'react';
import { Col } from 'react-bootstrap';
// import testPic from './../../public/images/andre_iguodala';

function Tile(props) {
	const { clickTile } = props;
	const { id, name, photo } = props.tile;
	return (
		<Col xs={4} lg={3}>
			{/* <img id={id} className='px-5 my-3' src="/images/andre_iguodala.png" alt={label} onClick={() => clickTile(id)} /> */}
			<img id={id} className='px-5 my-3' src={photo} alt={name} onClick={() => clickTile(id)} />
		</Col>
	);
}

export default Tile;