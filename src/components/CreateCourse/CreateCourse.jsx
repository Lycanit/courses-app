import Button from '../../common/Button/Button.jsx';
import Input from '../../common/Input/Input.jsx';
import './CreateCourse.css';

import React, { useState } from 'react';

function CreateCourse(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState(0);
	const [authors, setAuthors] = useState([]);
	// function callBackHander(val) {
	// 	props.callBack(val);
	// }
	return (
		<div>
			<table className='createCoursesMainTable'>
				<tbody width='100%'>
					<tr>
						<td align='left'>
							<label for='title'>Title</label>
							<br />
							<Input name='title' value={title} onChange={setTitle} />
						</td>
						<td align='right'>
							<Button
								text='Create course'
								onClick={() => {
									if (title.lengh < 2) {
										alert('Title is less then 2 symbols');
										return;
									}
									if (description.lengh < 2) {
										alert('description is less then 2 symbols');
										return;
									}
									if (duration < 1) {
										alert('Duration is less then 1');
										return;
									}
									// const curDate = Date.now();
									const curDate = new Date();
									const d = curDate.getDate();
									const m = curDate.getMonth() + 1; //January is 0!
									const yyyy = curDate.getFullYear();
									const curDateText = m + '/' + d + '/' + yyyy;
									console.log(curDateText);
									props.callBackCourses({
										id: Date.now().toString(),
										title: title,
										description: description,
										duration: duration,
										authors: authors.map((a) => a.id),
										creationDate: curDateText,
									});
								}}
							/>
						</td>
					</tr>
					<tr>
						<td colSpan='2' width='98%' align='center'>
							<label for='description'>Description</label>
							<br />
							<textarea
								rows='5'
								value={description}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								name='description'
							></textarea>
						</td>
					</tr>
					<tr>
						<td colSpan='2' width='98%' align='center'>
							<table className='createCoursesInnerTable'>
								<tbody>
									<tr>
										<td width='50%'>
											<table width='100%'>
												<tbody>
													<tr align='center'>
														<td>
															<p>Add author</p>
														</td>
													</tr>
													<tr>
														<td align='left'>
															<label for='authorName'>Author name</label>
															<Input
																name='authorName'
																value={authorName}
																onChange={setAuthorName}
															/>
														</td>
													</tr>
													<tr align='center'>
														<td>
															<Button
																text='Create author'
																onClick={() => {
																	if (authorName.length < 2) {
																		alert('Author name less then 2 symbols');
																		return;
																	}
																	const curDate = Date.now().toString();
																	props.callBackAuthors({
																		id: curDate,
																		name: authorName,
																	});
																}}
															/>
														</td>
													</tr>
													<tr align='center'>
														<td>
															<p>Duration</p>
														</td>
													</tr>
													<tr>
														<td align='left'>
															<label for='duration'>Duration</label>
															<Input
																name='duration'
																value={duration}
																onChange={setDuration}
															/>
														</td>
													</tr>
													<tr align='center'>
														<td>
															<p>
																Duration <strong>{ConverTime(duration)}</strong>{' '}
																hours
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
										<td width='50%'>
											<table width='100%'>
												<tbody>
													<tr>
														<td align='center'>
															<p>Authors</p>
														</td>
													</tr>
													<tr>
														<td align='center'>
															{props.db.mockedAuthorsList.map(function (
																object,
																i
															) {
																if (
																	!authors.some((item) => item.id === object.id)
																)
																	return (
																		<div>
																			{object.name} &nbsp;
																			<Button
																				text='Add author'
																				onClick={() => {
																					setAuthors((authors) => [
																						...authors,
																						object,
																					]);
																				}}
																			/>
																		</div>
																	);
															})}
														</td>
													</tr>
													<tr>
														<td align='center'>
															<p>Course authors</p>
														</td>
													</tr>
													<tr>
														<td align='center'>
															{authors.map(function (object, i) {
																return (
																	<div>
																		{object.name} &nbsp;
																		<Button
																			text='Delete author'
																			onClick={() => {
																				setAuthors((authors) =>
																					authors.filter(
																						(value, index, arr) =>
																							value.id !== object.id
																					)
																				);
																			}}
																		/>
																	</div>
																);
															})}
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
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

function ConverTime(mins) {
	return Math.floor(mins / 60) + ' : ' + (mins % 60);
}

export default CreateCourse;
