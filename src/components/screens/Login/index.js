import React from 'react';
import useLogin from '../../../hooks/useLogin';


import './index.scss'

const Login = (props) => {
	const { LoginFormSubmit, changePassword, changeUsername } = useLogin();

	return (
		<div className="login">
			<div className="header">
				<div className="image"></div>
				<div className="title">G</div>
			</div>
			<div className="body">
				<label className="lbl" > EMAIL </label>
				<input type="text" onChange={changeUsername} required className="username"/>
				<label className="lbl" > PASSWORD </label>
				<input type="password" onChange={changePassword}  required className = "password" />
				<button className="btn-sing-in" onClick={LoginFormSubmit}> Sing Up </button>
			</div>
		</div>
	);
};

export default Login;
