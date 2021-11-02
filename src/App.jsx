import coursesDB from './mocks.js';
import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import React, { useState } from 'react';

const App = () => {
	const [switcher, setSwitcher] = useState(true);
	const [filter, setFilter] = useState('');
	const [db, setDb] = useState(coursesDB);
	const UpdateFilter = (val) => {
		setFilter(val);
	};
	const UpdateAuthors = (val) => {
		coursesDB.mockedAuthorsList.push(val);
		const newDb = Object.assign({}, coursesDB);
		setDb(newDb);
	};
	const UpdateCourses = (val) => {
		coursesDB.mockedCoursesList.push(val);
		const newDb = Object.assign({}, coursesDB);
		setDb(newDb);
		setSwitcher(true);
	};
	const renderBody =
		switcher === true ? (
			<Courses
				db={coursesDB}
				filter={filter}
				callBack={UpdateFilter}
				setSwitcher={setSwitcher}
			/>
		) : (
			<CreateCourse
				db={db}
				callBackAuthors={UpdateAuthors}
				callBackCourses={UpdateCourses}
			/>
		);
	return (
		<div>
			<Header />
			{renderBody}
		</div>
	);
};
export default App;
