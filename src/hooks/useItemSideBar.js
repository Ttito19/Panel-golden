import React , { createRef, useState, useEffect } from 'react';

function useItemSideBar(props) {
	//hooks
	const [ classItem, setClassItem ] = useState('');
	const [ loading, setLoading ] = useState(true);
	const [ multiple, setMultiple ] = useState(false);

	const { type } = props.list;

	useEffect(() => {
		if (type === 'normal') setMultiple(false);
		else if (type === 'multiple') setMultiple(true);

		setClassItem(type + '-list');
		setLoading(false);
	}, []);

	return {
		classItem,
		loading,
		multiple
	};
}

export default useItemSideBar;
