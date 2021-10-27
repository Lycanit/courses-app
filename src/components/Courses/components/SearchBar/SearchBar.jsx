import Input from '../../../../common/Input/Input.jsx';
import Button from '../../../../common/Button/Button.jsx';
//import './Header.css';

import React, { useState } from 'react';

function SearchBar(props) {
	const [filter, setFilter] = useState('');
	function UpdateFilter(val) {
		setFilter(val);
		if (val === '') {
			props.callBack(val);
		}
	}

	return (
		<div>
			<Input value={filter} onChange={UpdateFilter} />
			<Button text='Search' onClick={() => props.callBack(filter)} />
			{/* <h1>{props.mockedCoursesList[0].title}</h1> */}
			{/* <CreateCourse
				title='Java'
				description='bla bla'
				authors='drttdrt;drtdrd'
				duration='144'
				creationDate='4443'
			/> */}
		</div>
	);
}
export default SearchBar;
