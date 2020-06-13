import React , { useState } from 'react';

function useLogin() {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const changeUsername = (ev) => setUsername(ev.target.value);
	const changePassword = (ev) => setPassword(ev.target.value);

	const LoginFormSubmit = async (ev) => {
		ev.preventDefault();
	};

	return {
		changeUsername,
		changePassword,
		LoginFormSubmit
	};
}

export default useLogin;
