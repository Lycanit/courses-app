import utils from '../../../../utils.js';
import Button from '../../../../common/Button/Button.jsx';
import './CourseCard.css';
import React from 'react';

const CourseCard = (props) => {
	return (
		<table className='courseCardMainTable'>
			<tbody>
				<tr>
					<td width='70%' valign='top'>
						<table>
							<tbody>
								<tr height='10%'>
									<td>
										<h3>{props.title}</h3>
									</td>
								</tr>
								<tr height='90%'>
									<td>
										<p>{props.description}</p>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
					<td width='30%'>
						<table width='100%'>
							<tbody>
								<tr>
									<td>
										<p>
											<strong>Authors: </strong> {props.authors}
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>
											<strong>Duration: </strong>{' '}
											{utils.converTime(props.duration)}
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>
											<strong>Created date: </strong>
											{props.creationDate.replace('/', '.').replace('/', '.')}
										</p>
									</td>
								</tr>
								<tr>
									<td align='center'>
										<p>
											<Button
												text='Show course'
												onClick={() => alert('Just checking how alert works')}
											/>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default CourseCard;
