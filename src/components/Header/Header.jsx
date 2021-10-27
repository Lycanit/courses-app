import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
import './Header.css';

import React from 'react';
function Header(props) {
	return (
		<table className='mainTable'>
			<tbody>
				<tr>
					<td width='90%'>
						<Logo />
					</td>
					<td width='5%'>
						<h3>Dave</h3>
					</td>
					<td width='5%'>
						<Button
							text='Logout'
							onClick={() => alert('Just checking how alert works')}
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
export default Header;
