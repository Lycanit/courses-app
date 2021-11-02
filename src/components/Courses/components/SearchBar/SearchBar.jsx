import Input from '../../../../common/Input/Input.jsx';
import Button from '../../../../common/Button/Button.jsx';
import React, { useState } from 'react';

const SearchBar = (props) => {
	const [filter, setFilter] = useState('');
	const UpdateFilter = (val) => {
		setFilter(val);
		if (val === '') {
			props.callBack(val);
		}
	};

	return (
		<div>
			<Input value={filter} onChange={UpdateFilter} />
			<Button text='Search' onClick={() => props.callBack(filter)} />
		</div>
	);
};
export default SearchBar;
