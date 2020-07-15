import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const ItemHide = (props) => {
	const { reference, items } = props;

	return (
		<ul className="sub-item hide" ref={reference}>
			{items.map((v, i) => (
				<li key={i}>
					<Link to={v.link} className="sub-item-list">
						<span className="sub-item-icon">{v.icon}</span>
						<span className="sub-item-text">{v.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ItemHide;
