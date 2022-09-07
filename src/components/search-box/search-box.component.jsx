import { Component } from 'react';

import './search-box.style.scss';

const SearchBox = ({ onChangeHandler }) => {
	return (
		<div className="search-box">
			<input type="search" placeholder="Search Monster" onChange={onChangeHandler} />
		</div>
	);
};

export default SearchBox;
