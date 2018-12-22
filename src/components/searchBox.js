import React from 'react';

const SearchBox = (props)=>{
	const {onSearchChange} = props;
	console.log("SearchBox");
	return (
		<div className = 'pa2'>
			<input 
			aria-label="search-robot"
			id="search"
			className='pa3 ba b--green bg-lightest-blue' 
			type="search" 
			placeholder="search robots" 
			onChange = {onSearchChange}
			/>
		</div>
	);


}

export default SearchBox;