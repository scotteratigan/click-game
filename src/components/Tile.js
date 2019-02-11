import React from 'react';
import { Button, Col } from 'react-bootstrap';

function Tile(props) {
	const { id, label, clickTile } = props;
	console.log('Received props:', props);
	return (
		<>
			<Col xs={4}>
				<Button id={id} className='px-5 my-3' onClick={() => clickTile(id)}>
					{label}
				</Button>
			</Col>
		</>
	);
}

export default Tile;