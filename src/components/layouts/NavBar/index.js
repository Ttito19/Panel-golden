import React from 'react';
import { FaPortrait } from 'react-icons/fa';
import { IoIosKeypad, IoIosNotificationsOutline } from 'react-icons/io';
import './index.scss';

//Extra
import useActivateItem from '../../../hooks/useActivateItem';

function NavBar() {
	const { onPress, refElementHide } = useActivateItem('hide');

	return (
		<div className="navbar">
			<section className="navbar-options" />
			<section className="user-options">
				<div className="icon-menu">
					<span className="icon" onClick={onPress}>
						<IoIosKeypad />
					</span>
					<ul ref={refElementHide} className="list-image-option hide">
						<li className="image-option">
							<span>
								<FaPortrait />
							</span>
							<span>Option</span>
						</li>
						<li className="image-option">
							<span>
								<FaPortrait />
							</span>
							<span>Option</span>
						</li>
						<li className="image-option">
							<span>
								<FaPortrait />
							</span>
							<span>Option</span>
						</li>
					</ul>
				</div>
				<div className="icon-menu">
					<span className="icon">
						<IoIosNotificationsOutline />
					</span>
				</div>
				<div className="image-admin">
					<div className="image">
						<img
							className="img"
							src="https://acquisio.com/blog/wp-content/uploads/2015/12/alevy_avatar_1450133221.jpg"
							alt="face-user"
						/>
						<div className="point-connected" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default NavBar;
