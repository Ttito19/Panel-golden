import React, { Fragment, FunctionComponent, useEffect, Children } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

//TRAER LA BASE DE DATOS DEL ADMIN.


import './index.scss';


//Component
import ItemHide from '../ItemHide';

//Extra
import useItemSideBar from '../../../../../hooks/useItemSideBar';
import useActivateItem from '../../../../../hooks/useActivateItem';

const Item = (props) => {
	//Hooks
	const history = useHistory();
	const { onPress, refElementHide } = useActivateItem('hide');
	const { multiple, loading, classItem } = useItemSideBar(props);

	//Const
	const { icon, title, subitems, link , onClick } = props.list;
	const onPressLink = () => {
		if (multiple) onPress();
		else {
			if(link) history.push(link);
		}
	};

	if (loading) return <Fragment />;

	return (
		<li className={`item-list ${classItem}`} onClick={onClick}>
			<div className="item" onClick={onPressLink}>
				<div className="item-container">
					<span className="item-icon">{icon}</span>
					<span className="item-text">{title}</span>
				</div>
				{multiple ? (
					<span className="item-action">
						<FaChevronDown />
					</span>
				) : null}
			</div>
			{multiple ? <ItemHide reference={refElementHide} items={subitems} /> : null}
		</li>
	);
};

export default Item;
