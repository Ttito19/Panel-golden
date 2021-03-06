import React , { useState,useContext ,useEffect} from 'react';
import { AccountContext } from '../context/accountContext';

function useLogin() {
	
	const { validationUser } = useContext(AccountContext)

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const changeUsername = (ev) => setUsername(ev.target.value);
	const changePassword = (ev) => setPassword(ev.target.value);

	const LoginFormSubmit = (ev) => {
		ev.preventDefault();
		validationUser(username,password);
	};

	useEffect( ()=>{

	})

	return {
		changeUsername,
		changePassword,
		LoginFormSubmit
	};
}

export default useLogin;
