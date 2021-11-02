const converTime = (mins, withHours = true) => {
	const str = Math.floor(mins / 60) + ' : ' + (mins % 60);
	return withHours ? str + ' hours' : str;
};

const isApplicable = (filter, course) => {
	return (
		filter === '' ||
		course.id.toLowerCase().includes(filter.toLowerCase()) ||
		course.title.toLowerCase().includes(filter.toLowerCase())
	);
};
const getAuthor = (authorsAr, mockedAuthorsList) => {
	let names = [];
	for (let i = 0; i < mockedAuthorsList.length; i++) {
		if (authorsAr.includes(mockedAuthorsList[i].id)) {
			names.push(mockedAuthorsList[i].name);
		}
	}
	return names.join(', ');
};
const utils = { converTime, getAuthor, isApplicable };
export default utils;
