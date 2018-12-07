import React from 'react';
import Card from './card';

//我的心情 #00ff00

const CardList = (props)=>{

	const {robots} = props;
	const cardComponents = robots.map((user,index)=>{
		return (
			<Card 
				key={robots[index].id} 
				id={robots[index].id} 
				name={robots[index].name} 
				email={robots[index].email}
			/>
			);
	});

	return (

	<div>
		{cardComponents}
	</div>

	);
}

export default CardList;