import React from 'react';
import useLogin from '../../../hooks/useLogin';
import {FaUserAlt,FaUserLock,FaTimes} from 'react-icons/fa'

import './index.scss'

const Login = (props) => {
	const { LoginFormSubmit, changePassword, changeUsername } = useLogin();

	return (
		<>
		<div className="alertsContents" > </div>

		<div className = "login">
			<div className="logo">
				<img src="https://emot.gob.ec/wp-content/uploads/2017/08/20689630_1833495579998731_7078376825041924385_o-1-1170x700.jpg" alt="image_not_found"/>
			</div>
			<form className="form">
				<div className="input-form-custom">
					<div className="icon">
						<FaUserAlt />
					</div>
					<input className="input" type="text" placeholder="Correo electronico" onChange={changeUsername} />
				</div>
				<div className="input-form-custom">
					<div className="icon">
						<FaUserLock />
					</div>
					<input className="input" type="password" placeholder ="Contraseña" onChange={changePassword} />
				</div>
				<button className="btn_submit" onClick={LoginFormSubmit} > Login </button>
			</form>
		</div>
		</>
	);
};

export default Login;
