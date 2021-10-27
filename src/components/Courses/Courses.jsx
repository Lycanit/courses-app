import SearchBar from './components/SearchBar/SearchBar.jsx';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import Button from '../../common/Button/Button.jsx';
import './Courses.css';

import React from 'react';

function Courses(props) {
	function callBackHander(val) {
		props.callBack(val);
	}
	return (
		<div>
			<table className='coursesMainTable'>
				<tbody>
					<tr>
						<td width='80%' align='left'>
							<SearchBar callBack={callBackHander} />
						</td>
						<td width='20%' align='right'>
							<Button
								text='Add new course'
								onClick={() => props.setSwitcher(false)}
							/>
						</td>
					</tr>
					{props.db.mockedCoursesList.map(function (object, i) {
						if (isApplicable(props.filter, object)) {
							return (
								<tr width='90%'>
									<td>
										<CourseCard
											title={object.title}
											description={object.description}
											authors={getAuthor(
												object.authors,
												props.db.mockedAuthorsList
											)}
											duration={object.duration}
											creationDate={object.creationDate}
										/>
									</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
		</div>
	);
}

function isApplicable(filter, course) {
	return (
		filter === '' ||
		course.id.toLowerCase().includes(filter.toLowerCase()) ||
		course.title.toLowerCase().includes(filter.toLowerCase())
	);
}
function getAuthor(authorsAr, mockedAuthorsList) {
	let names = [];
	for (let i = 0; i < mockedAuthorsList.length; i++) {
		if (authorsAr.includes(mockedAuthorsList[i].id)) {
			names.push(mockedAuthorsList[i].name);
		}
	}
	return names.join(', ');
}

export default Courses;
