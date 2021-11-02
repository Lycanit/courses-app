import utils from '../../utils.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import Button from '../../common/Button/Button.jsx';
import './Courses.css';
import React from 'react';

const Courses = (props) => {
	const callBackHander = (val) => {
		props.callBack(val);
	};
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
					{props.db.mockedCoursesList.map((object, i) => {
						if (utils.isApplicable(props.filter, object)) {
							return (
								<tr width='90%'>
									<td>
										<CourseCard
											title={object.title}
											description={object.description}
											authors={utils.getAuthor(
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
};

export default Courses;
