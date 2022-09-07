import { ChangeEventHandler } from 'react';

import './search-box.style.scss';

type SearchBoxProps = {
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ onChangeHandler }: SearchBoxProps) => {
	return (
		<div className="search-box">
			<input type="search" placeholder="Search Monster" onChange={onChangeHandler} />
		</div>
	);
};

export default SearchBox;
