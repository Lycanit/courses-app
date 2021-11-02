import React from 'react';

const Input = (props) => {
	const handleChange = (e) => {
		if (typeof props.onChange === 'function') {
			props.onChange(e.target.value);
		}
	};
	return (
		<div>
			<input
				type='text'
				value={props.value}
				name={props.name}
				onChange={handleChange}
			/>
		</div>
	);
};
export default Input;
